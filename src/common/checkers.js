const EMAIL_REGEX = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}"
const NAME_PATTERN = "[a-zA-ZÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑáàâãäéèêëíìîïóòôõöúùûüçñ'-.]"
const FULLNAME_REGEX = '^' + NAME_PATTERN + '+\\s(?:' + NAME_PATTERN + '{1,}\\s*){1,}$'


export function isValidEmail(email) {
  const emailRegex = RegExp(EMAIL_REGEX)
  return emailRegex.test(email)
}

export function isValidPass(pass){
  return pass.length > 5 ? true : false
}

export function isValidName(name) {
    const nameRegex = RegExp(FULLNAME_REGEX)
    return nameRegex.test(name)
}