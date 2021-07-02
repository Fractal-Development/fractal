export function calculateRadius(radius, maximum, defaultVal) {
    if (typeof radius === 'string') {
        return (Number(radius.split('%')[0]) / 100) * maximum;
    }
    else if (radius) {
        return radius;
    }
    else {
        return defaultVal;
    }
}
//# sourceMappingURL=calculateRadius.js.map