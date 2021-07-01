export function getBasePickerAccessibilityProps(disabled?: boolean): Record<string, any> {
    return {
        'aria-disabled': disabled
    };
}
