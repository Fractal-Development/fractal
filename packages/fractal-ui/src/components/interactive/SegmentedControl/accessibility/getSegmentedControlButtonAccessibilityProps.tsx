export function getSegmentedControlButtonAccessibilityProps(pressed: boolean, disabled?: boolean): Record<string, any> {
    return {
        'aria-pressed': pressed,
        'aria-disabled': disabled
    };
}
