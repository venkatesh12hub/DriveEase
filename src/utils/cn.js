/**
 * Simple conditional class merger utility.
 * @param  {...(string|boolean|undefined|null)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
