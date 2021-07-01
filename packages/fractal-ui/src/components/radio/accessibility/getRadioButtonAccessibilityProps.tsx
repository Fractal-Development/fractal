export function getRadioButtonAccessibilityProps(checked: boolean, disabled?: boolean): Record<string, any> {
    return {
        role: 'radio',
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}
