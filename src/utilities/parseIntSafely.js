/**
 * Safely parse string number to integer.
 *
 * @param {string} number
 * @param {number} [fallback=0]
 * @return {number} number converted to radix
 */
const parseIntSafely = (number, fallback = 0) => {
  const int = Number.parseInt(number, 10);

  if (Number.isNaN(int)) {
    return fallback;
  }

  return int;
};

export default parseIntSafely;
