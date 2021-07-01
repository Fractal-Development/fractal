export function extractGridItemProps({ flex, height, width }) {
    return `${height == null && width == null ? `flex: ${flex || 1}` : ''};`;
}
//# sourceMappingURL=types.js.map