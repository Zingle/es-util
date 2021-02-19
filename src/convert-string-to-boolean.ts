const convertStringToBoolean = (value: any): boolean => {
    if (value && typeof value === 'string') {
        if (value.toLowerCase() === 'true' || value.toLowerCase() === 'yes') {
            return true;
        }
        if (value.toLowerCase() === 'false' || value.toLowerCase() === 'no') {
            return false;
        }
    }

    return Boolean(value);
};

export default convertStringToBoolean;
