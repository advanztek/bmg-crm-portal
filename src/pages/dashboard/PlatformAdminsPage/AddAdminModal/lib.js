import { validateEmail, validatePhoneNumber } from "@/helpers/validation";

export const rules = {
  email: [
    (/** @type {string} */ value) => (!value ? "Enter account email address" : null),
    (/** @type {string} */ value) =>
      !validateEmail(value) ? `"${value}" is not a valid email. e.g "johndoe@gmail.com"` : null,
  ],
  first_name: [(/** @type {string} */ value) => (!value ? "Enter first name" : null)],
  last_name: [(/** @type {string} */ value) => (!value ? "Enter last name" : null)],
  mobile: [
    (/** @type {string} */ value) => (!value ? "Enter phone number" : null),
    (/** @type {string} */ value) =>
      !validatePhoneNumber(value) ? "Your Phone Number is Invalid" : null,
  ],
  subrole_id: [(/** @type {string} */ value) => (!value ? "Select admin role" : null)],
  country_id: [(/** @type {string} */ value) => (!value ? "Select country" : null)],
};
