import { EMAIL_REGEX, HAS_NUMBER_REGEX, LETTERS_ONLY_REGEX } from '../constants/regex';

export function emailIsValid(email) {
  return EMAIL_REGEX.test(email);
}

export function passwordIsValid(password) {
  return password.length >= 8 && password.length <= 52 && HAS_NUMBER_REGEX.test(password);
}

export function hasLettersOnly(string) {
  return LETTERS_ONLY_REGEX.test(string);
}
