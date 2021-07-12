export function getButtonIconAccessibilityProps(ariaLabel?: string): Record<string, any> {
    return {
        'aria-label': ariaLabel
    };
}
