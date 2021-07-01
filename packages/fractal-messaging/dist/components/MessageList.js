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
import React, { useCallback } from 'react';
import { PaddingLayer, useTheme } from '@bma98/fractal-ui';
import { ChatMessage } from './ChatMessage';
export function MessageList(_a) {
    var { messages, onFavoritePress, onSharePress, messageActions } = _a, layerProps = __rest(_a, ["messages", "onFavoritePress", "onSharePress", "messageActions"]);
    const { colors } = useTheme();
    const renderBubbleMessage = useCallback((message) => {
        return (React.createElement(ChatMessage, { message: message, key: message.id, onFavoritePress: onFavoritePress, onSharePress: onSharePress, messageActions: messageActions }));
    }, [messageActions, onFavoritePress, onSharePress]);
    return (React.createElement(PaddingLayer, Object.assign({ backgroundColor: colors.background }, layerProps), messages.map(renderBubbleMessage)));
}
//# sourceMappingURL=MessageList.js.map