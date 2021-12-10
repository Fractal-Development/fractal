import { getUserSelectAccessibilityProp } from './utils/getUserSelectAccessibilityProp';

export interface FractalTextProps {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    fontFamily?: string;
    fontStyle?: 'italic' | 'normal';
    selectable?: boolean;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textOverflow?: 'ellipsis';
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'inherit' | 'initial' | 'unset';
}

export function extractTextProps({
    fontSize,
    fontWeight,
    fontFamily,
    color,
    fontStyle,
    selectable,
    textAlign,
    textOverflow,
    whiteSpace
}: FractalTextProps): string {
    return `
        ${fontSize != null ? `font-size: ${fontSize}px` : ''};
        ${fontWeight != null ? `font-weight: ${fontWeight}` : ''};
        ${color != null ? `color: ${color}` : ''};
        ${fontFamily != null ? `font-family: ${fontFamily}` : ''};
        ${fontStyle != null ? `font-family: ${fontStyle}` : ''};
        ${getUserSelectAccessibilityProp(selectable)};
        ${textAlign != null ? `text-align: ${textAlign}` : ''};
        ${textOverflow != null ? `text-overflow: ${textOverflow}` : ''};
        ${whiteSpace != null ? `white-space: ${whiteSpace}` : ''};
    `;
}
