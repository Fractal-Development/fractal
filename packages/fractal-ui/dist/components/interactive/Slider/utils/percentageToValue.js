/**
 * Calculate the value based on percentage, lower and upper bound values
 *
 * @param percent the percent value in decimals (e.g 0.6, 0.3)
 * @param min the minimum value
 * @param max the maximum value
 */
export function percentageToValue(percentage, min, max) {
    return ((max - min) / 100) * percentage + min;
}
//# sourceMappingURL=percentageToValue.js.map