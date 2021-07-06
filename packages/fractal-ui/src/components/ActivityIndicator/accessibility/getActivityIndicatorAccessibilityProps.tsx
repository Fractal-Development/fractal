export function getActivityIndicatorAccessibilityProps(color: string): Record<string, any> {
    return {
        tabIndex: 0,
        'aria-label': color + 'Activity Indicator '
    };
}
