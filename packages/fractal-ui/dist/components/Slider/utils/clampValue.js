/**
 * Clamps a value to ensure it stays within the min and max range.
 *
 * @param value the value to clamp
 * @param min the minimum value
 * @param max the maximum value
 */
export function clampValue(value, minValue, maxValue) {
    if (maxValue <= minValue)
        return value;
    const higherMinimumValue = Math.max(value, minValue);
    return Math.min(higherMinimumValue, maxValue);
}
//# sourceMappingURL=clampValue.js.map