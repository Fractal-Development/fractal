export function getChipAccessibilityProps(name?: string): Record<string, any> {
    return {
        tabIndex: 0,
        'aria-label': 'Chip ' + name
    };
}
