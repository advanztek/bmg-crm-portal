/** @param {string} name */
export function getInitial(name) {
  return name.charAt(0);
}

/** @param {string | undefined | null} text */
export function renderText(text) {
  if (!text) return "-";
  return text || "-";
}

/**
 * Capitalizes the first letter of every word in a string.
 *
 * @param {string} text - The input string to capitalize.
 * @returns {string} The transformed string with each word capitalized.
 */
export function capitalizeWords(text) {
  if (!text) return "";
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Replaces all occurrences of a character in a string with another character.
 *
 * @param {string} text - The original string.
 * @param {string} targetChar - The character to replace.
 * @param {string} replacementChar - The character to replace it with.
 * @returns {string} The updated string with replacements applied.
 */
export function replaceCharacter(text, targetChar, replacementChar) {
  if (!text) return "";

  const escaped = targetChar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escaped, "g");

  return text.replace(regex, replacementChar);
}

/**
 * Converts a file to a Base64-encoded data URL string.
 * @param {File} file - The file to convert.
 * @returns {Promise<string>} A promise that resolves with the Base64-encoded data URL.
 */
export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(/** @type {string} */ (reader.result));
    reader.onerror = (error) => reject(error);
  });
}
