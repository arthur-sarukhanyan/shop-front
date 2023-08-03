import {reactive} from 'vue';
import {useField} from "@/use/field";

export function useForm(formObj = {}) {
    const form = reactive({});

    for (const [key, value] of Object.entries(formObj)) {
        form[key] = useField(value);
    }

    return form;
}