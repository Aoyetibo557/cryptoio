const UPPERCASE_REG_EXP   = /(?=.*?[A-Z])/;
const LOWERCASE_REG_EXP   = /(?=.*?[a-z])/;
const DIGITS_REG_EXP      = /(?=.*?[0-9])/;
const SPECIAL_CHAR_REG_EXP = /(?=.*?[#?!@$%^&*-])/;
const MIN_LEN_REG_EXP   = /.{8,}/;


const validatePassword = (password) => {
    const isValid = UPPERCASE_REG_EXP.test(password) &&
        LOWERCASE_REG_EXP.test(password) &&
        DIGITS_REG_EXP.test(password) &&
        SPECIAL_CHAR_REG_EXP.test(password) &&
        MIN_LEN_REG_EXP.test(password);
    return isValid;
    
}

export { UPPERCASE_REG_EXP, LOWERCASE_REG_EXP, DIGITS_REG_EXP, SPECIAL_CHAR_REG_EXP, MIN_LEN_REG_EXP, validatePassword };