export const validateLogin = (login) => {
    if (!login) {
      return false;
    }
    const reg = new RegExp(/^[a-z0-9]{3,25}/, "i");
      if (!reg.test(login)) {
        return false;
      }
    return true;
};
  
export const validatePassword = (password) => {
    if (!password) {
      return false;
    }
    const reg = new RegExp(/^[a-z0-9]{6,25}/, "i");
    if (!reg.test(password)) {
      return false;
    }
    return true;
};