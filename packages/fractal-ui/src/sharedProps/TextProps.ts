import { getUserSelectAccessibilityProp } from './utils/getUserSelectAccessibilityProp';

export interface TextProps {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    fontFamily?: string;
    fontStyle?: 'italic' | 'normal';
    selectable?: boolean;
}

export function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable }: TextProps): string {
    return `
        ${fontSize != null ? `font-size: ${fontSize}px` : ''};
        ${fontWeight != null ? `font-weight: ${fontWeight}` : ''};
        ${color != null ? `color: ${color}` : ''};
        ${fontFamily != null ? `font-family: ${fontFamily}` : ''};
        ${fontStyle != null ? `font-family: ${fontStyle}` : ''};
        ${getUserSelectAccessibilityProp(selectable)};
    `;
}
