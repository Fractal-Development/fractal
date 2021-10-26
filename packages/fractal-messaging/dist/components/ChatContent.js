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
import { PaddingLayer } from '@bma98/fractal-ui';
import { MessageList } from './MessageList';
import { KeyboardAvoidingView } from './KeyboardAvoidingView';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { MessageInput } from '.';
export function ChatContent(_a) {
    var { messages, onFavoritePress, onSharePress, messageActions, getBubbleColor, onSend, placeholder, isLoading, keyboardAvoidingViewProps, messageInputButtonVariant = 'alternative', enableFluidFooter, customFooter } = _a, layerProps = __rest(_a, ["messages", "onFavoritePress", "onSharePress", "messageActions", "getBubbleColor", "onSend", "placeholder", "isLoading", "keyboardAvoidingViewProps", "messageInputButtonVariant", "enableFluidFooter", "customFooter"]);
    const footer = (customFooter !== null && customFooter !== void 0 ? customFooter : isLoading) ? (React.createElement(ChatLoadingIndicator, null)) : (React.createElement(MessageInput, { placeholder: placeholder, onSend: onSend, buttonVariant: messageInputButtonVariant }));
    return (React.createElement(KeyboardAvoidingView, Object.assign({}, keyboardAvoidingViewProps),
        React.createElement(PaddingLayer, Object.assign({ flex: 1 }, layerProps),
            React.createElement(MessageList, { messages: messages, onFavoritePress: onFavoritePress, onSharePress: onSharePress, messageActions: messageActions, getBubbleColor: getBubbleColor, footerComponent: enableFluidFooter ? footer : undefined }),
            !enableFluidFooter && footer)));
}
//# sourceMappingURL=ChatContent.js.map