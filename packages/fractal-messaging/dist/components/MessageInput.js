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
import React, { forwardRef, useCallback, useState } from 'react';
import { ButtonTextField } from '@bma98/fractal-ui';
import { SendIcon } from '../assets/SendIcon';
const MessageInput = forwardRef((_a, ref) => {
    var { onSend, useForegroundVariant, buttonVariant = 'success' } = _a, others = __rest(_a, ["onSend", "useForegroundVariant", "buttonVariant"]);
    const renderIcon = useCallback((color, size) => React.createElement(SendIcon, { height: size, width: size, fill: color }), []);
    const [message, setMessage] = useState('');
    const handleSendMessage = useCallback(() => {
        if (message != '') {
            onSend(message);
            setMessage('');
        }
    }, [message, onSend]);
    return (React.createElement(ButtonTextField, Object.assign({ ref: ref, value: message, buttonVariant: buttonVariant, buttonImage: renderIcon, onButtonPress: handleSendMessage, onSubmitEditing: handleSendMessage, onChangeText: setMessage, useForegroundVariant: useForegroundVariant }, others)));
});
MessageInput.displayName = 'MessageInput';
export { MessageInput };
//# sourceMappingURL=MessageInput.js.map