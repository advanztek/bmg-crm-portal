import { validatePassword, validatePhoneNumber } from "@/helpers/validation";

/**
 * @param {any} formData
 */
export const rules = (formData) => ({
  0: {
    first_name: [(/** @type {any} */ value) => (!value ? "First name is required" : null)],
    last_name: [(/** @type {any} */ value) => (!value ? "Last name is required" : null)],
    email: [
      (/** @type {any} */ value) => (!value ? "Email is required" : null),
      (/** @type {any} */ value) =>
        value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(/** @type {any} */ value)
          ? "Invalid email address"
          : null,
    ],
    country_id: [(/** @type {any} */ value) => (!value ? "Country is required" : null)],
    mobile: [
      (/** @type {any} */ value) => (!value ? "Mobile number is required" : null),
      (/** @type {any} */ value) =>
        value && !validatePhoneNumber(value) ? "Phone must be a valid number" : null,
    ],
  },

  1: {
    company_name: [
      (/** @type {any} */ value) => (!value ? "Company name is required" : null),
      (/** @type {any} */ value) =>
        value && (value.length < 2 || value.length > 50)
          ? "Company name must be between 2 and 50 characters"
          : null,
    ],

    team_number: [
      (/** @type {any} */ value) => (!value ? "Team number is required" : null),
      (/** @type {any} */ value) =>
        value && (isNaN(/** @type {any} */ value) || value < 1)
          ? "Team number must be at least 1"
          : null,
    ],

    address: [
      (/** @type {any} */ value) => (!value ? "Address is required" : null),
      (/** @type {any} */ value) =>
        value && value.length > 100 ? "Address must not exceed 100 characters" : null,
    ],
    about_us: [(/** @type {any} */ value) => (!value ? "Please tell us about your service" : null)],
  },

  2: {
    logo: [
      (/** @type {any} */ value) => {
        if (!value) return null;

        if (!(value instanceof File)) return "Invalid logo format";

        if (!["image/jpeg", "image/png", "image/jpg"].includes(value.type))
          return "Logo must be JPG or PNG";

        return null;
      },
    ],

    primary_color: [
      (/** @type {any} */ value) => {
        if (!value) return null;

        return !/^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(/** @type {any} */ value)
          ? "Invalid color format"
          : null;
      },
    ],
  },

  3: {
    how_you_heard_about_us: [
      (/** @type {any} */ value) => (!value ? "Please tell us how you heard about us" : null),
      (/** @type {any} */ value) => {
        const allowed = [
          "linkedin",
          "facebook",
          "instagram",
          "google",
          "friend",
          "advertisement",
          "other",
        ];
        return value && !allowed.includes(/** @type {any} */ value) ? "Invalid selection" : null;
      },
    ],

    other_specify: [
      (/** @type {any} */ value) => {
        if (formData?.how_you_heard_about_us !== "other") return null;

        if (!value) return "Please specify how you heard about us";

        if (value.length < 3) return "Must be at least 3 characters";

        if (value.length > 255) return "Must not exceed 255 characters";

        return null;
      },
    ],
  },
  4: {
    password: [
      (/** @type {any} */ value) => (!value ? "Password is required" : null),
      (/** @type {any} */ value) =>
        !validatePassword(value)
          ? "Password must contain uppercase, lowercase, and a number"
          : null,
    ],
    confirm_password: [
      (/** @type {any} */ value) => (!value ? "Password is required" : null),
      (/** @type {any} */ value) =>
        !validatePassword(value)
          ? "Password must contain uppercase, lowercase, and a number"
          : null,
      (/** @type {any} */ value) =>
        formData?.password && value != formData?.password ? "Passwords do not match" : null,
    ],
  },
});

export const steps = [
  "Who Are You?",
  "Your Business",
  "Make It Yours",
  "Spread the Word",
  "Lock It Down",
];
