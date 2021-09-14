export function getFlexProperty(flex) {
    return `
        ${flex != null ? `flex: ${flex} 1 0%` : ''};
        ${flex != null ? `-webkit-box-flex: ${flex}` : ''};
    `;
}
//# sourceMappingURL=index.js.map