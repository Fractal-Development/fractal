export function getCheckBoxAccessibilityProps(checked: boolean, disabled?: boolean): Record<string, any> {
    return {
        role: 'checkbox',
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}
