export function getButtonTextFieldAccessibilityProps(ariaLabel?: string): Record<string, any> {
    return {
        tabIndex: 0,
        'aria-label': ariaLabel + 'Input'
    };
}
