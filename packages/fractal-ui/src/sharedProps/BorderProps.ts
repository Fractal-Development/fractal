import { FractalSharedStyleProps } from './FractalSharedStyleProps';

export function extractBorderProps({
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderWidth = 0,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderColor,
    borderStyle
}: FractalSharedStyleProps): string {
    return `
        ${borderRadius != null ? `border-radius: ${borderRadius}px` : ''};
        ${borderTopLeftRadius != null ? `border-top-left-radius: ${borderTopLeftRadius}px` : ''};
        ${borderTopRightRadius != null ? `border-top-right-radius: ${borderTopRightRadius}px` : ''};
        ${borderBottomLeftRadius != null ? `border-bottom-left-radius: ${borderBottomLeftRadius}px` : ''};
        ${borderBottomRightRadius != null ? `border-bottom-right-radius: ${borderBottomRightRadius}px` : ''};
        ${borderWidth != null ? `border-width: ${borderWidth}px` : ''};
        ${borderTopWidth != null ? `border-top-width: ${borderTopWidth}px` : ''};
        ${borderBottomWidth != null ? `border-bottom-width: ${borderBottomWidth}px` : ''};
        ${borderLeftWidth != null ? `border-left-width: ${borderLeftWidth}px` : ''};
        ${borderRightWidth != null ? `border-right-width: ${borderRightWidth}px` : ''};
        ${borderColor != null ? `border-color: ${borderColor}` : ''};
        ${borderStyle != null ? `border-style: ${borderStyle}` : ''};
    `;
}
