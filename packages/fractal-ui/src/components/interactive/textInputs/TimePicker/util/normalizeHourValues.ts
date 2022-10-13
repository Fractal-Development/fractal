export function normalizeHourValues(values: [string, string][]): [string, string][] {
    return values.map((item) => {
        const [id, value] = item;
        if (value.length === 1) {
            return [id, `0${value}`];
        }
        return item;
    });
}
