export function extractWebProps({ borderStyle, cursor, pointerEvents, focusable, boxSizing = 'border-box', alignItems }) {
    return `
        ${alignItems == null ? `-webkit-box-align: stretch` : `-webkit-box-align:: ${alignItems}`};
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        ${cursor ? `cursor: ${cursor}` : ''};
        ${pointerEvents ? `pointer-events: ${pointerEvents === 'box-none' ? 'none' : pointerEvents}` : ''};
        ${boxSizing ? `box-sizing: ${boxSizing}` : ''};
        ${focusable ? `user-focus: ${focusable ? 'text' : 'none'}` : ''};
        ${borderStyle == null ? `border-style: solid` : ''};
        ${alignItems == null ? `align-items: stretch` : ''};
    `;
}
//# sourceMappingURL=WebProps.js.map