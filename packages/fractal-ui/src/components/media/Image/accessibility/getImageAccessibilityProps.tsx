export function getImageAccessibilityProps(label?: string): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'img',
        'aria-label': label
    };
}
