export function normalizeHourValues(values) {
    return values.map((item) => {
        const [id, value] = item;
        if (value.length === 1) {
            return [id, `0${value}`];
        }
        else {
            return item;
        }
    });
}
//# sourceMappingURL=normalizeHourValues.js.map