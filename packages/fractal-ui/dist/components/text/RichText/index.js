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
import { Text } from '../Text';
import TextExtraction from './TextExtraction';
import { isDefaultParseShape } from './types';
export const PATTERNS = {
    url: /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.(xn--)?[a-z0-9-]{2,20}\b([-a-zA-Z0-9@:%_\+\[\],.~#?&\/=]*[-a-zA-Z0-9@:%_\+\]~#?&\/=])*/i,
    phone: /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}/,
    email: /\S+@\S+\.\S+/
};
export function RichText(props) {
    const { parse, childrenProps } = props, others = __rest(props, ["parse", "childrenProps"]);
    const getPatterns = () => {
        if (parse === undefined) {
            return [];
        }
        return parse.map((option) => {
            if (isDefaultParseShape(option)) {
                const { type } = option, patternOption = __rest(option, ["type"]);
                if (!PATTERNS[type]) {
                    throw new Error(`${option.type} is not a supported type`);
                }
                return Object.assign(Object.assign({}, patternOption), { pattern: PATTERNS[type] });
            }
            return option;
        });
    };
    const getParsedText = () => {
        if (!parse) {
            return props.children;
        }
        if (typeof props.children !== 'string') {
            return props.children;
        }
        const textExtraction = new TextExtraction(props.children, getPatterns());
        return textExtraction.parse().map((textProps, index) => {
            const { style: parentStyle } = props;
            const { style } = textProps, remainder = __rest(textProps, ["style"]);
            return React.createElement(Text, Object.assign({ key: `parsedText-${index}`, style: Object.assign(Object.assign({}, parentStyle), style) }, childrenProps, remainder));
        });
    };
    return React.createElement(Text, Object.assign({}, others), getParsedText());
}
//# sourceMappingURL=index.js.map