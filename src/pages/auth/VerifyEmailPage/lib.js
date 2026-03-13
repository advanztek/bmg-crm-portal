import { validateEmail } from "@/helpers/validation";

export const rules = {
  email: [
    (/** @type {string} */ value) => (!value ? "Enter account email address" : null),
    (/** @type {string} */ value) =>
      !validateEmail(value) ? `"${value}" is not a valid email. e.g "johndoe@gmail.com"` : null,
  ],
  otp: [
    (/** @type {string} */ value) => (!value ? "Enter the code sent to your email" : null),
    (/** @type {string} */ value) =>
      value?.length !== 6 ? "Code must be exactly 6 characters" : null,
    (/** @type {string} */ value) => (!parseInt(value) ? "Code must be numeric" : null),
  ],
};
