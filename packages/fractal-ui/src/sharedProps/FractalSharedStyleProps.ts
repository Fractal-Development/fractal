export interface WebProps {
    className?: string;
    pointerEvents?: 'none' | 'auto' | 'box-none';
    cursor?:
        | 'auto'
        | 'default'
        | 'none'
        | 'alias'
        | 'all-scroll'
        | 'cell'
        | 'context-menu'
        | 'help'
        | 'pointer'
        | 'progress'
        | 'wait'
        | 'crosshair'
        | 'text'
        | 'vertical-text'
        | 'copy'
        | 'move'
        | 'no-drop'
        | 'not-allowed'
        | 'col-resize'
        | 'e-resize'
        | 'ew-resize'
        | 'n-resize'
        | 'ne-resize'
        | 'ns-resize'
        | 'nw-resize'
        | 'nwse-resize'
        | 'row-resize'
        | 's-resize'
        | 'se-resize'
        | 'sw-resize'
        | 'w-resize';
    boxSizing?: 'border-box' | 'content-box';
    focusable?: boolean;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
export interface ShadowProps {
    boxShadow?: string;
    elevation?: number;
}

export interface BorderProps {
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderWidth?: number;
    borderTopWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderColor?: string;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
}

export interface DisplayProps {
    flex?: 'none' | 'auto' | number;
    display?: 'flow' | 'table' | 'flex' | 'grid' | 'ruby' | 'subgrid' | 'block' | 'inline' | 'none' | 'inline-block' | null;
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

export interface BackgroundProps {
    backgroundColor?: string;
}

export interface DimensionProps {
    width?: string | number;
    maxWidth?: string | number;
    minWidth?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    minHeight?: string | number;
    // Padding
    padding?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingRight?: number;
    paddingLeft?: number;
    // Margin
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
}

export interface TextStyleProps {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    fontFamily?: string;
    fontStyle?: 'italic' | 'normal';
    selectable?: boolean;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textOverflow?: 'ellipsis';
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'inherit' | 'initial' | 'unset';
    wordWrap?: 'normal' | 'break-word' | 'initial' | 'inherit';
}

export interface FractalSharedStyleProps
    extends BackgroundProps,
        DimensionProps,
        DisplayProps,
        BorderProps,
        ShadowProps,
        WebProps,
        TextStyleProps {}
