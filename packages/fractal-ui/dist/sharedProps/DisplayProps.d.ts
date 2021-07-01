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
export declare function extractDisplayProps({ flex, display, justifyContent, alignItems, flexDirection, alignSelf, alignContent, flexWrap, flexBasis, flexGrow, flexShrink, position, top, right, bottom, left, zIndex, opacity, overflow }: DisplayProps): string;
