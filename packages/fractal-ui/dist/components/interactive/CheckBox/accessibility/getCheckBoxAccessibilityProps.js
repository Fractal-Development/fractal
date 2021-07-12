export function getCheckBoxAccessibilityProps(label, checked, disabled) {
    return {
        role: 'checkbox',
        'aria-label': label,
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}
//# sourceMappingURL=getCheckBoxAccessibilityProps.js.map