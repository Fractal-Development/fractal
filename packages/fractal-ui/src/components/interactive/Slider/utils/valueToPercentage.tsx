/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */

export function valueToPercentage(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
}
