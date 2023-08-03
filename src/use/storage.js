export function useStorage() {
    const set = (key, data) => {
        if (data === null) {
            return;
        }

        if (typeof data !== 'string') {
            data = JSON.stringify(data);
        }

        localStorage.setItem(key, data);
    }

    const get = (key) => {
        let data = localStorage.getItem(key);
        if (isJson(data)) {
            data = JSON.parse(data);
        }

        return data;
    }

    const remove = (key) => {
        localStorage.removeItem(key);
    }

    const isJson = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    return {set, get, remove};
}