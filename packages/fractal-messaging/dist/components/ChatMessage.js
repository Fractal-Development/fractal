import React, { useState, useCallback } from 'react';
import { Layer, Popover, useTheme } from '@bma98/fractal-ui';
import { MessageActions } from './MessageActions';
import { BaseChatMessage } from './BaseChatMessage';
export function ChatMessage({ message, onFavoritePress, onSharePress, messageActions, getBubbleColor, children, parsePatterns }) {
    const { spacings } = useTheme();
    const [popoverVisible, setPopoverVisible] = useState(false);
    const showPopover = useCallback(() => {
        setPopoverVisible(true);
    }, []);
    const hidePopover = useCallback(() => {
        setPopoverVisible(false);
    }, []);
    const handleFavorite = useCallback((message) => {
        onFavoritePress === null || onFavoritePress === void 0 ? void 0 : onFavoritePress(message);
        hidePopover();
    }, [hidePopover, onFavoritePress]);
    const handleShare = useCallback((message) => {
        onSharePress === null || onSharePress === void 0 ? void 0 : onSharePress(message);
        hidePopover();
    }, [hidePopover, onSharePress]);
    const renderPopoverChildren = useCallback(() => {
        if (messageActions) {
            return messageActions(message);
        }
        return React.createElement(MessageActions, { message: message, onFavoritePress: handleFavorite, onSharePress: handleShare });
    }, [handleFavorite, handleShare, message, messageActions]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Popover, { placement: 'right', active: popoverVisible, onRequestClose: hidePopover, popoverChildren: renderPopoverChildren, modalBackgroundColor: 'rgba(0, 0, 0, 0.15)', usePortal: true, display: 'flex' }, (ref) => (React.createElement(BaseChatMessage, { ref: ref, message: message, getBubbleColor: getBubbleColor, parsePatterns: parsePatterns, onLongPress: showPopover }, children))),
        React.createElement(Layer, { marginBottom: spacings.m })));
}
//# sourceMappingURL=ChatMessage.js.map