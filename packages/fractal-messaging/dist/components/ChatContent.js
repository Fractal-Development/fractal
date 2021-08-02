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
import { PaddingLayer, AnimatePresence } from '@bma98/fractal-ui';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';
import { KeyboardAvoidingView } from './KeyboardAvoidingView';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
export function ChatContent(_a) {
    var { messages, onFavoritePress, onSharePress, messageActions, getBubbleColor, onSend, placeholder = 'Escribe aquí...', isLoading, keyboardAvoidingViewProps } = _a, layerProps = __rest(_a, ["messages", "onFavoritePress", "onSharePress", "messageActions", "getBubbleColor", "onSend", "placeholder", "isLoading", "keyboardAvoidingViewProps"]);
    return (React.createElement(KeyboardAvoidingView, Object.assign({}, keyboardAvoidingViewProps),
        React.createElement(PaddingLayer, Object.assign({ flex: 1 }, layerProps),
            React.createElement(MessageList, { messages: messages, onFavoritePress: onFavoritePress, onSharePress: onSharePress, messageActions: messageActions, getBubbleColor: getBubbleColor }),
            React.createElement(AnimatePresence, null, isLoading ? (React.createElement(ChatLoadingIndicator, { show: true })) : (React.createElement(MessageInput, { placeholder: placeholder, useForegroundVariant: true, onSend: onSend, from: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 } }))))));
}
//# sourceMappingURL=ChatContent.js.map