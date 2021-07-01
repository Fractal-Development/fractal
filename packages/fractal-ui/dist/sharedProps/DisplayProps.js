export function extractDisplayProps({ flex, display, justifyContent, alignItems, flexDirection, alignSelf, alignContent, flexWrap, flexBasis, flexGrow, flexShrink, position, top, right, bottom, left, zIndex, opacity, overflow }) {
    return `
        ${flex != null ? `flex: ${flex}` : ''};
        display: ${display !== null && display !== void 0 ? display : 'flex'};
        flex-direction: ${flexDirection !== null && flexDirection !== void 0 ? flexDirection : 'column'};
        ${justifyContent != null ? `justify-content: ${justifyContent}` : ''};
        ${alignItems != null ? `align-items: ${alignItems}` : ''};
        ${alignSelf != null ? `align-self: ${alignSelf}` : ''};
        ${alignContent != null ? `align-content: ${alignContent}` : ''};
        ${flexWrap != null ? `flex-wrap: ${flexWrap}` : ''};
        ${flexBasis != null ? `flex-basis: ${typeof flexBasis === 'number' ? `${flexBasis}px` : flexBasis}` : ''};
        ${flexGrow != null ? `flex-grow: ${flexGrow}` : ''};
        ${flexShrink != null ? `flex-shrink: ${flexShrink}` : ''};
        ${position != null ? `position: ${position}` : ''};
        ${top != null ? `top: ${top}` : ''};
        ${right != null ? `right: ${right}` : ''};
        ${bottom != null ? `bottom: ${bottom}` : ''};
        ${left != null ? `left: ${left}` : ''};
        ${zIndex != null ? `z-index: ${zIndex}` : ''};
        ${opacity != null ? `opacity: ${opacity}` : ''};
        ${overflow != null ? `overflow: ${overflow}` : ''};
    `;
}
//# sourceMappingURL=DisplayProps.js.map