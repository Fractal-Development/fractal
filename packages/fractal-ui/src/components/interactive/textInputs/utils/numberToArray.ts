export function numberToArray(value: number, useZero?: boolean): [string, string][] {
    let counter = value;
    const arrayOfValues: [string, string][] = [];

    while (useZero ? counter >= 0 : counter > 0) {
        arrayOfValues.push([counter.toString(), counter.toString()]);
        counter--;
    }

    return arrayOfValues;
}
