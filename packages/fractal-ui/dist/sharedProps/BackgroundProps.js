export function extractBackgroundProps({ backgroundColor }) {
    return `
        background-color: ${backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : 'transparent'};
    `;
}
//# sourceMappingURL=BackgroundProps.js.map