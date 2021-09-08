export function extractWebProps({ borderStyle, cursor, pointerEvents, focusable, boxSizing = 'border-box' }) {
    return `
        -webkit-box-align: stretch;
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        ${cursor ? `cursor: ${cursor}` : ''};
        ${pointerEvents ? `pointer-events: ${pointerEvents === 'box-none' ? 'none' : pointerEvents}` : ''};
        ${boxSizing ? `box-sizing: ${boxSizing}` : ''};
        ${focusable ? `user-focus: ${focusable ? 'text' : 'none'}` : ''};
        ${borderStyle == null ? `border-style: solid` : ''};
    `;
}
//# sourceMappingURL=WebProps.js.map