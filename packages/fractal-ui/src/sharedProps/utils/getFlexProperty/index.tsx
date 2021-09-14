export function getFlexProperty(flex?: 'none' | 'auto' | number): string {
    return `
        ${flex != null ? `flex: ${flex} 1 0%` : ''};
        ${flex != null ? `-webkit-box-flex: ${flex}` : ''};
    `;
}
