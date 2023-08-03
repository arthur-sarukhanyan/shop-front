import {reactive, ref, watch} from 'vue';
import {useValidators} from "@/use/validators";

export function useField(field) {
    let value = ref(field.value);
    let errors = reactive({});
    let valid = ref(false);
    let touched = ref(false);

    const validate = (value) => {
        valid.value = true;

        for (let validator of field.validators) {
            let name = useValidators().getName(validator);
            if (useValidators()[name]) {
                errors[name] = !useValidators()[name](value, validator);

                if (errors[name]) {
                    valid.value = false;
                }
            }
        }
    }

    watch(value, validate);

    validate(field.value);

    const blur = () => {
        touched.value = true;
    }

    return {value, errors, valid, touched, blur};
}