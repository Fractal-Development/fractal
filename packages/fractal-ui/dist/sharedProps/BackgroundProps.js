export function extractBackgroundProps({ backgroundColor, bg }) {
    return `
        background-color: ${bg !== null && bg !== void 0 ? bg : 'transparent'};
        background-color: ${backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : 'transparent'};
    `;
}
//# sourceMappingURL=BackgroundProps.js.map