export function calculateRadius(radius: string | number | undefined, maximum: number, defaultVal: number): number {
    if (typeof radius === 'string') {
        return (Number(radius.split('%')[0]) / 100) * maximum;
    } else if (radius) {
        return radius;
    } else {
        return defaultVal;
    }
}
