export function getButtonAccessibilityProps(pressed, disabled, ariaLabel) {
    return {
        'aria-label': ariaLabel,
        'aria-pressed': pressed,
        'aria-disabled': disabled
    };
}
//# sourceMappingURL=getButtonAccessibilityProps.js.map