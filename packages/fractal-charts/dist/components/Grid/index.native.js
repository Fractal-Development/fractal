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
import { Line, G } from 'react-native-svg';
function Horizontal({ ticks = [], y }) {
    return (React.createElement(G, null, ticks.map((tick, index) => (React.createElement(Line, { key: `${index}`, x1: '0%', x2: '100%', y1: y === null || y === void 0 ? void 0 : y(tick), y2: y === null || y === void 0 ? void 0 : y(tick), strokeWidth: 1, stroke: 'rgba(0,0,0,0.2)' })))));
}
function Vertical({ ticks = [], x }) {
    return (React.createElement(G, null, ticks.map((tick, index) => (React.createElement(Line, { key: index, y1: '0%', y2: '100%', x1: x === null || x === void 0 ? void 0 : x(tick), x2: x === null || x === void 0 ? void 0 : x(tick), strokeWidth: 1, stroke: 'rgba(0,0,0,0.2)' })))));
}
function Both(props) {
    return (React.createElement(G, null,
        React.createElement(Horizontal, Object.assign({}, props)),
        React.createElement(Vertical, Object.assign({}, props))));
}
export function Grid(_a) {
    var { direction = 'HORIZONTAL' } = _a, others = __rest(_a, ["direction"]);
    if (direction === 'VERTICAL') {
        return React.createElement(Vertical, Object.assign({}, others));
    }
    else if (direction === 'HORIZONTAL') {
        return React.createElement(Horizontal, Object.assign({}, others));
    }
    else if (direction === 'BOTH') {
        return React.createElement(Both, Object.assign({}, others));
    }
    return null;
}
//# sourceMappingURL=index.native.js.map