export function extractShadowProps({ boxShadow }) {
    return `
        ${boxShadow != null ? `box-shadow: ${boxShadow}` : ''};
    `;
}
//# sourceMappingURL=ShadowProps.js.map