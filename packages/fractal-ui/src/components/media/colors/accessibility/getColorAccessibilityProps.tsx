export function getColorAccessibilityProps(checked: boolean): Record<string, any> {
    return {
        'aria-pressed': checked,
        'aria-label': 'Color Picker'
    };
}
