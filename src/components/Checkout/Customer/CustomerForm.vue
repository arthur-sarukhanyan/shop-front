<template>
    <div class="shopper-informations">
        <div class="row">
            <div class="col-sm-3" v-if="!isLoggedIn && authType !== 'guest'">
                <auth-register></auth-register>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="col-sm-5 clearfix">
                    <div class="bill-to">
                        <p>Ship To</p>
                        <div class="form-one">
                            <div class="form-group" :class="{'has-error': !form.companyName.valid && form.companyName.touched}">
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    name="companyName"
                                    v-model="form.companyName.value"
                                    @blur="form.companyName.blur">

                                <small v-if="form.companyName.errors.minLength && form.companyName.touched" class="error-msg">Field
                                    minimal length is 3</small>
                            </div>
                            <div class="form-group" :class="{'has-error': !form.email.valid && form.email.touched}">
                                <input
                                    type="text"
                                    placeholder="Email*"
                                    name="email"
                                    v-model="form.email.value"
                                    @blur="form.email.blur">

                                <small v-if="form.email.errors.required && form.email.touched" class="error-msg">Field
                                    is required</small>
                                <small v-else-if="form.email.errors.email && form.email.touched" class="error-msg">Email
                                    format is incorrect</small>
                            </div>
                            <div class="form-group" :class="{'has-error': !form.firstName.valid && form.firstName.touched}">
                                <input
                                    type="text"
                                    placeholder="First Name *"
                                    name="firstName"
                                    v-model="form.firstName.value"
                                    @blur="form.firstName.blur">

                                <small v-if="form.firstName.errors.required && form.firstName.touched" class="error-msg">Field
                                    is required</small>
                                <small v-else-if="form.firstName.errors.minLength && form.firstName.touched" class="error-msg">Field
                                    minimal length is 3</small>
                            </div>
                            <div class="form-group" :class="{'has-error': !form.lastName.valid && form.lastName.touched}">
                                <input
                                    type="text"
                                    placeholder="Last Name *"
                                    name="lastName"
                                    v-model="form.lastName.value"
                                    @blur="form.lastName.blur">

                                <small v-if="form.lastName.errors.required && form.lastName.touched" class="error-msg">Field
                                    is required</small>
                                <small v-else-if="form.lastName.errors.minLength && form.lastName.touched" class="error-msg">Field
                                    minimal length is 3</small>
                            </div>
                            <div class="form-group" :class="{'has-error': !form.address1.valid && form.address1.touched}">
                                <input
                                    type="text"
                                    placeholder="Address 1 *"
                                    name="address1"
                                    v-model="form.address1.value"
                                    @blur="form.address1.blur">

                                <small v-if="form.address1.errors.required && form.address1.touched" class="error-msg">Field
                                    is required</small>
                                <small v-else-if="form.address1.errors.minLength && form.address1.touched" class="error-msg">Field
                                    minimal length is 3</small>
                            </div>
                            <div class="form-group" :class="{'has-error': !form.address2.valid && form.address2.touched}">
                                <input
                                    type="text"
                                    placeholder="Address 2"
                                    name="address2"
                                    v-model="form.address2.value"
                                    @blur="form.address2.blur">

                                <small v-if="form.address2.errors.minLength && form.address2.touched" class="error-msg">Field
                                    minimal length is 3</small>
                            </div>
                        </div>
                        <div class="form-two">
                            <form>
                                <div class="form-group" :class="{'has-error': !form.zip.valid && form.zip.touched}">
                                    <input
                                        type="text"
                                        placeholder="Zip / Postal Code *"
                                        name="zip"
                                        v-model="form.zip.value"
                                        @blur="form.zip.blur">

                                    <small v-if="form.zip.errors.required && form.zip.touched" class="error-msg">Field
                                        is required</small>
                                    <small v-else-if="form.zip.errors.minLength && form.zip.touched" class="error-msg">Field
                                        minimal length is 3</small>
                                </div>
                                <div class="form-group" :class="{'has-error': !form.country.valid && form.country.touched}">
                                    <select
                                        name="country"
                                        v-model="form.country.value"
                                        @blur="form.country.blur">

                                        <option>-- Country --</option>
                                        <option v-for="country of countries.data" :value="country.id">
                                            {{ country.name }}
                                        </option>
                                    </select>

                                    <small v-if="form.country.errors.required && form.country.touched" class="error-msg">Field
                                        is required</small>
                                </div>
                                <div class="form-group" :class="{'has-error': !form.city.valid && form.city.touched}">
                                    <input
                                        type="text"
                                        placeholder="City / State *"
                                        name="city"
                                        v-model="form.city.value"
                                        @blur="form.city.blur">

                                    <small v-if="form.city.errors.required && form.city.touched" class="error-msg">Field
                                        is required</small>
                                    <small v-else-if="form.city.errors.minLength && form.city.touched" class="error-msg">Field
                                        minimal length is 3</small>
                                </div>
                                <div class="form-group" :class="{'has-error': !form.phone.valid && form.phone.touched}">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        name="phone"
                                        v-model="form.phone.value"
                                        @blur="form.phone.blur">

                                    <small v-if="form.phone.errors.minLength && form.phone.touched" class="error-msg">Field
                                        minimal length is 8</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="order-message">
                        <p>Shipping Order</p>
                        <div class="form-group" :class="{'has-error': !form.notes.valid && form.notes.touched}">
                            <textarea
                                placeholder="Notes about your order, Special Notes for Delivery"
                                rows="16"
                                name="notes"
                                v-model="form.notes.value"
                                @blur="form.notes.blur">
                            </textarea>

                            <small v-if="form.notes.errors.minLength && form.notes.touched" class="error-msg">Field
                                minimal length is 3</small>
                        </div>
                    </div>
                </div>
                <button type="submit" :disabled="!isFormValid()" class="btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import AuthRegister from "@/components/Auth/AuthRegister.vue";
import {mapState} from "vuex";
import {useForm} from "@/use/form";

export default {
    name: "CustomerFrom",
    components: {AuthRegister},
    props: ['isLoggedIn', 'authType'],
    mounted() {
        this.$store.dispatch('countries/getData');
    },
    methods: {
        async handleSubmit() {
            const data = {
                company_name: this.form.companyName.value,
                email: this.form.email.value,
                first_name: this.form.firstName.value,
                last_name: this.form.lastName.value,
                address_1: this.form.address1.value,
                address_2: this.form.address2.value,
                zip: this.form.zip.value,
                country_id: this.form.country.value,
                city: this.form.city.value,
                phone: this.form.phone.value,
                notes: this.form.notes.value,
            };

            this.$emit('profile-update', data);
        },
        isFormValid() {
            if (!this.form) return false;
            let isValid = true;

            for (let key in this.form) {
                if (!this.form[key].valid) {
                    isValid = false;
                }
            }

            return isValid;
        }
    },
    setup() {
        const form = useForm({
            companyName: {
                value: '', validators: ['minLength:3']
            },
            email: {
                value: '', validators: ['required', 'email']
            },
            firstName: {
                value: '', validators: ['required', 'minLength:3']
            },
            lastName: {
                value: '', validators: ['required', 'minLength:3']
            },
            address1: {
                value: '', validators: ['required', 'minLength:3']
            },
            address2: {
                value: '', validators: ['minLength:3']
            },
            zip: {
                value: '', validators: ['required', 'minLength:3']
            },
            country: {
                value: '', validators: ['required']
            },
            city: {
                value: '', validators: ['required', 'minLength:3']
            },
            phone: {
                value: '', validators: ['minLength:8']
            },
            notes: {
                value: '', validators: ['minLength:3']
            },
        });

        return {form};
    },

    computed: {
        ...mapState(['countries'])
    }
}
</script>

<style scoped>
    input, select {
        background:#F0F0E9;
        border: 0 none;
        margin-bottom:10px;
        padding: 10px;
        width: 100%;
        font-weight: 300
    }
</style>