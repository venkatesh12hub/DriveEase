/**
 * Formats a numeric value into a USD currency string.
 * @param {number} amount
 * @param {boolean} [showDecimal=false]
 * @returns {string}
 */
export function formatCurrency(amount, showDecimal = false) {
  if (typeof amount !== 'number') return '$0';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showDecimal ? 2 : 0,
    maximumFractionDigits: showDecimal ? 2 : 0,
  }).format(amount);
}

/**
 * Formats acceleration time (0-60 mph).
 * @param {number|string} seconds
 * @returns {string}
 */
export function formatAcceleration(seconds) {
  return `${seconds}s 0-60`;
}

/**
 * Formats horsepower.
 * @param {number|string} hp
 * @returns {string}
 */
export function formatHorsepower(hp) {
  return `${hp} HP`;
}
