export function getYearsInRange(maxDate: Date, minDate: Date): Array<[string, string]> {
    const minValue = minDate.getFullYear();
    let difference = maxDate.getFullYear() - minValue;
    const arrayOfValues = Array<[string, string]>();

    while (difference > 0) {
        const value = difference + minValue;
        arrayOfValues.push([value.toString(), value.toString()]);
        difference--;
    }

    arrayOfValues.push([minValue.toString(), minValue.toString()]);

    return arrayOfValues;
}
