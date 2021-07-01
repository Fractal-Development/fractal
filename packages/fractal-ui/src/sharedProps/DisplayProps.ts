export interface DisplayProps {
    flex?: 'none' | 'auto' | number;
    display?: 'flow' | 'table' | 'flex' | 'grid' | 'ruby' | 'subgrid' | 'block' | 'inline' | 'none' | 'inline-block';
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    flexBasis?: number | string;
    flexGrow?: number;
    flexShrink?: number;
    position?: 'relative' | 'absolute' | 'fixed';
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    zIndex?: number;
    opacity?: number;
    overflow?: 'scroll' | 'hidden';
}

export function extractDisplayProps({
    flex,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    alignSelf,
    alignContent,
    flexWrap,
    flexBasis,
    flexGrow,
    flexShrink,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    opacity,
    overflow
}: DisplayProps): string {
    return `
        ${flex != null ? `flex: ${flex}` : ''};
        display: ${display ?? 'flex'};
        flex-direction: ${flexDirection ?? 'column'};
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
