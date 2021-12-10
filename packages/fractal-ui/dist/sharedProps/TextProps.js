import { getUserSelectAccessibilityProp } from './utils/getUserSelectAccessibilityProp';
export function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable, textAlign, textOverflow, whiteSpace, wordWrap }) {
    return `
        ${fontSize != null ? `font-size: ${fontSize}px` : ''};
        ${fontWeight != null ? `font-weight: ${fontWeight}` : ''};
        ${color != null ? `color: ${color}` : ''};
        ${fontFamily != null ? `font-family: ${fontFamily}` : ''};
        ${fontStyle != null ? `font-style: ${fontStyle}` : ''};
        ${getUserSelectAccessibilityProp(selectable)};
        ${textAlign != null ? `text-align: ${textAlign}` : ''};
        ${textOverflow != null ? `text-overflow: ${textOverflow}` : ''};
        ${whiteSpace != null ? `white-space: ${whiteSpace}` : ''};
        ${wordWrap != null ? `word-wrap: ${wordWrap}` : ''};
    `;
}
//# sourceMappingURL=TextProps.js.map