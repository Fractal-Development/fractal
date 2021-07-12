/**
 * Clamps a value to ensure it stays within the min and max range.
 *
 * @param value the value to clamp
 * @param min the minimum value
 * @param max the maximum value
 */

export function clampValue(value: number, minValue: number, maxValue: number): number {
    if (maxValue <= minValue) return value;
    const higherMinimumValue = Math.max(value, minValue);
    return Math.min(higherMinimumValue, maxValue);
}
