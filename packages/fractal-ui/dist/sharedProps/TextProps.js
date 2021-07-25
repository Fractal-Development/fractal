import { getUserSelectAccessibilityProp } from './utils/getUserSelectAccessibilityProp';
export function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable, textAlign }) {
    return `
        ${fontSize != null ? `font-size: ${fontSize}px` : ''};
        ${fontWeight != null ? `font-weight: ${fontWeight}` : ''};
        ${color != null ? `color: ${color}` : ''};
        ${fontFamily != null ? `font-family: ${fontFamily}` : ''};
        ${fontStyle != null ? `font-family: ${fontStyle}` : ''};
        ${getUserSelectAccessibilityProp(selectable)};
        ${textAlign != null ? `text-align: ${textAlign}` : ''}
    `;
}
//# sourceMappingURL=TextProps.js.map