export function getYearsInRange(maxDate, minDate) {
    const minValue = minDate.getFullYear();
    let difference = maxDate.getFullYear() - minValue;
    const arrayOfValues = Array();
    while (difference > 0) {
        const value = difference + minValue;
        arrayOfValues.push([value.toString(), value.toString()]);
        difference--;
    }
    arrayOfValues.push([minValue.toString(), minValue.toString()]);
    return arrayOfValues;
}
//# sourceMappingURL=getYearsInRange.js.map