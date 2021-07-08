export function getCheckBoxAccessibilityProps(label: string,checked: boolean, disabled?: boolean): Record<string, any> {
    return {
        role: 'checkbox',
        'aria-label': label,
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}
