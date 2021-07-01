/**
 * Converts a value to a specific precision (or decimal points).
 *
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value the value to convert
 * @param precision the precision or decimal points
 */

function toPrecision(value: number, precision: number): string {
    let nextValue = value;
    const scaleFactor = 10 ** precision;
    nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
    return nextValue.toFixed(precision);
}

/**
 * Counts the number of decimal places a number has
 *
 * @param value the decimal value to count.
 * @var scaleFactor represents a powers of 10 for scale the value to get number of decimals, it`s a way to find decimals
 * for example: if value is 6.1, the first interaction the operation returned 6, the second interaction returned 6.1 and condition not meet, and decimal places is 1.
 */

function countDecimalPlaces(value: number): number {
    if (!Number.isFinite(value)) return 0;

    let scaleFactor = 1;
    let decimalPlaces = 0;
    while (Math.round(value * scaleFactor) / scaleFactor !== value) {
        scaleFactor *= 10;
        decimalPlaces += 1;
    }
    return decimalPlaces;
}

/**
 * Rounds a specific value to the next or previous step
 *
 * @param value the value to round
 * @param from the number that stepping started from
 * @param step the specified step
 */

export function roundValueToStep(value: number, from: number, step: number): number {
    const nextValue = Math.round((value - from) / step) * step + from;
    const precision = countDecimalPlaces(step);
    return parseFloat(toPrecision(nextValue, precision));
}
