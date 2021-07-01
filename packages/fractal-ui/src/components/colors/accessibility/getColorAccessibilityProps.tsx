export function getColorAccessibilityProps(checked: boolean, color: string): Record<string, any> {
    return {
        'aria-pressed': checked,
        'aria-label': 'Color Picker ' + color
    };
}
