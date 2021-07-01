export function numberToArray(value, useZero) {
    let counter = value;
    const arrayOfValues = Array();
    while (useZero ? counter >= 0 : counter > 0) {
        arrayOfValues.push([counter.toString(), counter.toString()]);
        counter--;
    }
    return arrayOfValues;
}
//# sourceMappingURL=numberToArray.js.map