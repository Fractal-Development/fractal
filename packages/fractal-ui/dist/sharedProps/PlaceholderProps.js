export function extractPlaceholder({ placeholderTextColor }) {
    return `
        ::placeholder {
            color: ${placeholderTextColor !== null && placeholderTextColor !== void 0 ? placeholderTextColor : 'black'}
        }
    `;
}
//# sourceMappingURL=PlaceholderProps.js.map