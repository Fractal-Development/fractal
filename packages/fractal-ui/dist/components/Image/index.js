var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, useCallback } from 'react';
import { ResizableImage } from './ResizableImage';
import { Layer } from '../containers/Layer';
import { getImageAccessibilityProps } from './accessibility/getImageAccessibilityProps';
const Image = forwardRef((_a, ref) => {
    var { label, source, resizeMode, width, height } = _a, others = __rest(_a, ["label", "source", "resizeMode", "width", "height"]);
    const getBackgroundSize = useCallback(() => {
        if ((resizeMode == 'center' || resizeMode == 'repeat') && width != null && height != null) {
            if (typeof width == 'string') {
                return `${width} ${height}`;
            }
            return width < height ? `${width}px` : `${height}px`;
        }
        return undefined;
    }, [height, resizeMode, width]);
    return (React.createElement(Layer, Object.assign({ ref: ref, flexBasis: 'auto', overflow: 'hidden', zIndex: 0, display: 'flex', width: width, height: height }, others, getImageAccessibilityProps(label)),
        React.createElement(ResizableImage, { source: source, resizeMode: resizeMode, backgroundSize: getBackgroundSize() })));
});
Image.displayName = 'Image';
export { Image };
//# sourceMappingURL=index.js.map