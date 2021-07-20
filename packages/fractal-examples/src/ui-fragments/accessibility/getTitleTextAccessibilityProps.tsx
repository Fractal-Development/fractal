export function getTitleTextAccessibilityProps(head_level: number): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'heading',
        'aria-level': head_level
    };
}
