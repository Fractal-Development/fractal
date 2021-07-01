export function extractWebProps({ cursor, pointerEvents, boxSizing = 'border-box' }) {
    return `
        ${cursor ? `cursor: ${cursor}` : ''};
        ${pointerEvents ? `pointer-events: ${pointerEvents === 'box-none' ? 'none' : pointerEvents}` : ''};
        ${boxSizing ? `box-sizing: ${boxSizing}` : ''};
    `;
}
//# sourceMappingURL=WebProps.js.map