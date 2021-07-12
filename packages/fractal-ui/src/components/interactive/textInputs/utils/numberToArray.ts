export function numberToArray(value: number, useZero?: boolean): Array<[string, string]> {
    let counter = value;
    const arrayOfValues = Array<[string, string]>();

    while (useZero ? counter >= 0 : counter > 0) {
        arrayOfValues.push([counter.toString(), counter.toString()]);
        counter--;
    }

    return arrayOfValues;
}
