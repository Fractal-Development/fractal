export function getControlToggleButtonAccessibilityProps(variant: string): Record<string, any> {
    return {
        'aria-label': variant
    };
}
