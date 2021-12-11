export function calculateRadius(radius, maximum, defaultVal) {
    if (typeof radius === 'string') {
        return (Number(radius.split('%')[0]) / 100) * maximum;
    }
    if (radius) {
        return radius;
    }
    return defaultVal;
}
//# sourceMappingURL=calculateRadius.js.map