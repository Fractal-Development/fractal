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
import { KeyboardAvoidingLayer } from '@bma98/fractal-ui';
import { MessageList } from './MessageList';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { MessageInput } from './MessageInput';
export function ChatContent(_a) {
    var { messages, onFavoritePress, onSharePress, messageActions, getBubbleColor, onSend, placeholder, isLoading, keyboardAvoidingViewProps, messageInputButtonVariant = 'alternative', enableFluidFooter, customFooter, rowRenderer, parsePatterns } = _a, layerProps = __rest(_a, ["messages", "onFavoritePress", "onSharePress", "messageActions", "getBubbleColor", "onSend", "placeholder", "isLoading", "keyboardAvoidingViewProps", "messageInputButtonVariant", "enableFluidFooter", "customFooter", "rowRenderer", "parsePatterns"]);
    const footer = customFooter != null ? (customFooter) : isLoading ? (React.createElement(ChatLoadingIndicator, null)) : (React.createElement(KeyboardAvoidingLayer, Object.assign({ keyboardVerticalOffset: 100 }, keyboardAvoidingViewProps),
        React.createElement(MessageInput, { useForegroundVariant: true, placeholder: placeholder, onSend: onSend, buttonVariant: messageInputButtonVariant })));
    return (React.createElement(React.Fragment, null,
        React.createElement(MessageList, Object.assign({}, layerProps, { messages: messages, rowRenderer: rowRenderer, parsePatterns: parsePatterns, onFavoritePress: onFavoritePress, onSharePress: onSharePress, messageActions: messageActions, getBubbleColor: getBubbleColor, footerComponent: enableFluidFooter ? footer : undefined })),
        !enableFluidFooter ? footer : undefined));
}
//# sourceMappingURL=ChatContent.js.map