const EMAIL_REGEX = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}"


export function isValidEmail(email) {
  const emailRegex = RegExp(EMAIL_REGEX)
  return emailRegex.test(email)
}

export function isValidPass(pass){
  return pass.length > 5 ? true : false
}