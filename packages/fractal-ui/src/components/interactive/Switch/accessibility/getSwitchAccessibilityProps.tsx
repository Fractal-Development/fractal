export function getSwitchAccessibilityProps(checked?: boolean, disabled?: boolean): Record<string, any> {
    return {
        role: 'switch',
        'aria-label': 'Switch',
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}
