/**
 * Converts a string to URL-friendly slug by replacing spaces with dashes
 * and converting to lowercase
 * @param {string} str - The input string to convert
 * @returns {string} - The slugified string
 */
export function slugify(str) {
  if (!str) return '';
  return str.trim().replace(/\s+/g, '-').toLowerCase();
}

/**
 * Converts a slugified string back to normal text by replacing dashes with spaces
 * @param {string} str - The slugified string to convert
 * @returns {string} - The unslugified string
 */
export function unslugify(str) {
  if (!str) return '';
  return str
    .trim()
    .replace(/-+/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
