export function numberInRange(value: number, min: number, max: number) {
    if (value >= min && value <= max) {
        return true;
    }
    return false;
}
