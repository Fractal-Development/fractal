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
import { ButtonTextField } from '@bma98/fractal-ui';
import { SendIcon } from '../assets/SendIcon';
const MessageInput = forwardRef((_a, ref) => {
    var { onSend, useForegroundVariant } = _a, others = __rest(_a, ["onSend", "useForegroundVariant"]);
    const renderIcon = useCallback((color, size) => React.createElement(SendIcon, { height: size, width: size, fill: color }), []);
    return (React.createElement(ButtonTextField, Object.assign({ ref: ref, buttonVariant: 'success', buttonImage: renderIcon, onButtonPress: onSend, onSubmitEditing: onSend, useForegroundVariant: useForegroundVariant }, others)));
});
MessageInput.displayName = 'MessageInput';
export { MessageInput };
//# sourceMappingURL=MessageInput.js.map