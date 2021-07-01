export function extractDimensionProps({ height, maxHeight, minHeight, maxWidth, minWidth, width, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, margin, marginBottom, marginLeft, marginRight, marginTop }) {
    return `
        ${height != null ? `height: ${typeof height === 'number' ? `${height}px` : height}` : ''};
        ${minHeight != null ? `min-height: ${typeof minHeight === 'number' ? `${minHeight}px` : minHeight}` : ''};
        ${maxHeight != null ? `max-height: ${typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight}` : ''};
        ${minWidth != null ? `min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth}` : ''};
        ${maxWidth != null ? `max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth}` : ''};
        ${width != null ? `width: ${typeof width === 'number' ? `${width}px` : width}` : ''};
        ${padding != null ? `padding: ${padding}px` : ''};
        ${paddingTop != null ? `padding-top: ${paddingTop}px` : ''};
        ${paddingBottom != null ? `padding-bottom: ${paddingBottom}px` : ''};
        ${paddingLeft != null ? `padding-left: ${paddingLeft}px` : ''};
        ${paddingRight != null ? `padding-right: ${paddingRight}px` : ''};
        ${margin != null ? `margin: ${margin}px` : ''};
        ${marginTop != null ? `margin-top: ${marginTop}px` : ''};
        ${marginBottom != null ? `margin-bottom: ${marginBottom}px` : ''};
        ${marginLeft != null ? `margin-left: ${marginLeft}px` : ''};
        ${marginRight != null ? `margin-right: ${marginRight}px` : ''};
    `;
}
//# sourceMappingURL=DimensionProps.js.map