export function useValidators() {
    const required = (value) => {
        return !!value;
    }

    const minLength = (value, validator) => {
        if (!value.length) return true;
        return value.length >= getOption(validator, 1);
    }

    const maxLength = (value, validator) => {
        if (!value.length) return true;
        return value.length <= getOption(validator, 255);
    }

    const email = (value) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return value.match(validRegex);
    }

    const getOption = (validator, defaultValue) => {
        return validator.includes(':') ? validator.split(':')[1] : defaultValue;
    }

    const getName = (validator) => {
        return validator.includes(':') ? validator.split(':')[0] : validator;
    }

    return {required, minLength, maxLength, email, getName};
}