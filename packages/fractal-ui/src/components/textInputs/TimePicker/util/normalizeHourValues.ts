export function normalizeHourValues(values: Array<[string, string]>): Array<[string, string]> {
    return values.map((item) => {
        const [id, value] = item;
        if (value.length === 1) {
            return [id, `0${value}`];
        } else {
            return item;
        }
    });
}
