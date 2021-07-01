export function getButtonAccessibilityProps(pressed?: boolean, disabled?: boolean, ariaLabel?: string): Record<string, any> {
    return {
        'aria-label': ariaLabel,
        'aria-pressed': pressed,
        'aria-disabled': disabled
    };
}
