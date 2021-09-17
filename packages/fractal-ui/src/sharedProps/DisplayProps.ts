import { getDisplayProperty } from './utils/getDisplayProperty';
import { getFlexProperty } from './utils/getFlexProperty';

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
    flexDirection = 'column',
    alignSelf,
    alignContent,
    flexWrap,
    flexBasis = 'auto',
    flexGrow,
    flexShrink = 0,
    position = 'relative',
    top,
    right,
    bottom,
    left,
    zIndex = 0,
    opacity,
    overflow
}: DisplayProps): string {
    return `
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
        ${getFlexProperty(flex)}
    `;
}
