export function getUserSelectAccessibilityProp(selectable?: boolean): string {
    return `user-select: ${selectable ? 'text' : 'none'}`;
}
