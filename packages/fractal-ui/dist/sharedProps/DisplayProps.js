import { getDisplayProperty } from './utils/getDisplayProperty';
export function extractDisplayProps({ flex, display, justifyContent, alignItems, flexDirection, alignSelf, alignContent, flexWrap, flexBasis, flexGrow, flexShrink, position, top, right, bottom, left, zIndex, opacity, overflow }) {
    return `
        ${flex != null ? `flex: ${flex}` : ''};
        ${getDisplayProperty(display)};
        ${flexDirection != null ? `flex-direction: ${flexDirection}` : ''};
        ${justifyContent != null ? `justify-content: ${justifyContent}` : ''};
        ${alignItems != null ? `align-items: ${alignItems}` : ''};
        ${alignSelf != null ? `align-self: ${alignSelf}` : ''};
        ${alignContent != null ? `align-content: ${alignContent}` : ''};
        ${flexWrap != null ? `flex-wrap: ${flexWrap}` : ''};
        ${flexBasis != null ? `flex-basis: ${typeof flexBasis === 'number' ? `${flexBasis}px` : flexBasis}` : ''};
        ${flexGrow != null ? `flex-grow: ${flexGrow}` : ''};
        ${flexShrink != null ? `flex-shrink: ${flexShrink}` : ''};
        ${position != null ? `position: ${position}` : ''};
        ${top != null ? `top: ${top}px` : ''};
        ${right != null ? `right: ${right}px` : ''};
        ${bottom != null ? `bottom: ${bottom}px` : ''};
        ${left != null ? `left: ${left}px` : ''};
        ${zIndex != null ? `z-index: ${zIndex}` : ''};
        ${opacity != null ? `opacity: ${opacity}` : ''};
        ${overflow != null ? `overflow: ${overflow}` : ''};
    `;
}
//# sourceMappingURL=DisplayProps.js.map