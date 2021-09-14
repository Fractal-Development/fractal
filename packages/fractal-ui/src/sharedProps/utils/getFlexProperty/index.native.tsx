export function getFlexProperty(flex?: 'none' | 'auto' | number): string {
    return `${flex != null ? `flex: ${flex}` : ''};`;
}
