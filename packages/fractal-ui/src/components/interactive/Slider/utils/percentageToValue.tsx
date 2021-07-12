/**
 * Calculate the value based on percentage, lower and upper bound values
 *
 * @param percent the percent value in decimals (e.g 0.6, 0.3)
 * @param min the minimum value
 * @param max the maximum value
 */

export function percentageToValue(percentage: number, min: number, max: number): number {
    return ((max - min) / 100) * percentage + min;
}
