export function getControlButtonAccessibilityProps(variant: string): Record<string, any> {
    return {
        'aria-label': variant
    };
}
