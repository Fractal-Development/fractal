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
import React, { forwardRef } from 'react';
import { Layer } from '../Layer';
import { Image } from '../../Image';
const ImageBackground = forwardRef((_a, ref) => {
    var { children, resizeMode, source, width, height } = _a, others = __rest(_a, ["children", "resizeMode", "source", "width", "height"]);
    return (React.createElement(Layer, Object.assign({ ref: ref, position: 'relative', overflow: 'hidden', width: width, height: height }, others),
        React.createElement(Image, { width: width, height: height, resizeMode: resizeMode, source: source, position: 'absolute', label: 'Background' }),
        React.createElement(Layer, { zIndex: 1 }, children)));
});
ImageBackground.displayName = 'ImageBackground';
export { ImageBackground };
//# sourceMappingURL=index.js.map