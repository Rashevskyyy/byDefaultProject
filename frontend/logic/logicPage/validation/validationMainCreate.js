 export const validateFirstLastName = (fields) => { 
    if (!fields) {
      return false;
    }
    const reg = new RegExp(/^[a-z]{3,25}/, "i");
      if (!reg.test(fields)) {
        return false;
      }
    return true;
};
export const validationAge = (age) => {
    if (!age) {
        return false;
      }
      const reg = new RegExp(/^\d{1,2}$/);
        if (!reg.test(age)) {
          return false;
        }
      return true;
}
export const validateEmail = (email) => {
    if (!email) {
      return false;
    }
    const reg = new RegExp(/^[a-zA-Z0-9._-]+@[a-z0-9-]+.+.[a-z]{2,4}$/);
    if (!reg.test(email)) {
      return false;
    }
    return true;
};

export const validPhone = (phone) => {
    if (!phone) {
      return false;
    }
    const reg = new RegExp(/^\+380\d{3}\d{2}\d{2}\d{2}$/);
    if (!reg.test(phone)) {
      return false;
    }
    return true;
};