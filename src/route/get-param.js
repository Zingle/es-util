import 'url-search-params-polyfill';

function checkBoolean(input) {
    if (input === null) return false;

    switch (input.toLowerCase().trim()) {
        case 'true': case 'yes': case '1': return true;
        case 'false': case 'no': case '0': return false;
        default: return Boolean(input);
    }
}

export default function getParam(key, str, bool = false) {
    const params = new URLSearchParams(str);
    const value = params.get(key);

    if (bool) return checkBoolean(value);

    return value;
}
