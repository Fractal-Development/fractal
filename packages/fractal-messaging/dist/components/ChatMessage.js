import React, { useState, useCallback } from 'react';
import { Layer, Popover, useTheme } from '@bma98/fractal-ui';
import { Bubble } from './Bubble';
import { MessageImage } from './MessageImage';
import { MessageAudio } from './MessageAudio';
import { MessageVideo } from './MessageVideo';
import { MessageText } from './MessageText';
import { MessageActions } from './MessageActions';
export function ChatMessage({ message, onFavoritePress, onSharePress, messageActions, getBubbleColor, children }) {
    const { colors, spacings } = useTheme();
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
        React.createElement(Popover, { placement: 'right', active: popoverVisible, onRequestClose: hidePopover, popoverChildren: renderPopoverChildren, modalBackgroundColor: 'rgba(0, 0, 0, 0.15)', usePortal: true, display: 'flex' }, (ref) => (React.createElement(Bubble, { ref: ref, arrowPosition: message.senderType === 'bot' ? 'left' : 'right', color: getBubbleColor
                ? getBubbleColor(message)
                : message.senderType === 'bot'
                    ? colors.foreground
                    : colors.mainInteractiveColor, onLongPress: showPopover },
            message.image ? (React.createElement(MessageImage, { source: message.image })) : message.audio ? (React.createElement(MessageAudio, { source: message.audio })) : message.video ? (React.createElement(MessageVideo, { source: message.video })) : (React.createElement(MessageText, { text: message.text, color: message.senderType === 'bot' ? colors.text : colors.white })), children === null || children === void 0 ? void 0 :
            children(message)))),
        React.createElement(Layer, { marginBottom: spacings.m })));
}
//# sourceMappingURL=ChatMessage.js.map