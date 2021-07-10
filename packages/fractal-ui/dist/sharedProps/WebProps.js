export function extractWebProps({ cursor, pointerEvents, focusable, boxSizing = 'border-box' }) {
    return `
        ${cursor ? `cursor: ${cursor}` : ''};
        ${pointerEvents ? `pointer-events: ${pointerEvents === 'box-none' ? 'none' : pointerEvents}` : ''};
        ${boxSizing ? `box-sizing: ${boxSizing}` : ''};
        ${focusable ? `user-focus: ${focusable ? 'text' : 'none'}` : ''};
    `;
}
//# sourceMappingURL=WebProps.js.map