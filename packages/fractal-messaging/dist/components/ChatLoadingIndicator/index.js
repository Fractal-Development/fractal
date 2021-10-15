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
import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { loadingCircleTransition, loadingCircleVariants } from './config';
const bulletStyle = {
    backgroundColor: '#999999',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2
};
export function ChatLoadingIndicator(_a) {
    var { show } = _a, layerProps = __rest(_a, ["show"]);
    return show ? (React.createElement(Layer, Object.assign({ height: 40, width: 60, justifyContent: 'center' }, layerProps),
        React.createElement(Layer, { backgroundColor: '#ffffff', padding: 8, borderRadius: 20, flexDirection: 'row', from: loadingCircleVariants.start, animate: loadingCircleVariants.end, exit: loadingCircleVariants.start },
            React.createElement(Layer, { style: bulletStyle, from: loadingCircleVariants.start, animate: loadingCircleVariants.end, transition: loadingCircleTransition }),
            React.createElement(Layer, { style: bulletStyle, from: loadingCircleVariants.start, animate: loadingCircleVariants.end, transition: Object.assign(Object.assign({}, loadingCircleTransition), { delay: 0.3 }) }),
            React.createElement(Layer, { style: bulletStyle, from: loadingCircleVariants.start, animate: loadingCircleVariants.end, transition: Object.assign(Object.assign({}, loadingCircleTransition), { delay: 0.6 }) })))) : null;
}
//# sourceMappingURL=index.js.map