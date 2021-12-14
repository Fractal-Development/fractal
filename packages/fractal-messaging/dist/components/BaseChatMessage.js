import React, { forwardRef } from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { Bubble } from './Bubble';
import { MessageImage } from './MessageImage';
import { MessageAudio } from './MessageAudio';
import { MessageVideo } from './MessageVideo';
import { MessageText } from './MessageText';
export const BaseChatMessage = forwardRef(({ message, getBubbleColor, children, parsePatterns, onLongPress }, ref) => {
    const { colors } = useTheme();
    return (React.createElement(Bubble, { ref: ref, arrowPosition: message.senderType === 'bot' ? 'left' : 'right', color: getBubbleColor
            ? getBubbleColor(message)
            : message.senderType === 'bot'
                ? colors.foreground
                : colors.mainInteractiveColor, onLongPress: onLongPress },
        message.image ? (React.createElement(MessageImage, { source: message.image })) : message.audio ? (React.createElement(MessageAudio, { source: message.audio })) : message.video ? (React.createElement(MessageVideo, { source: message.video })) : (React.createElement(MessageText, { parsePatterns: parsePatterns, text: message.text, color: message.senderType === 'bot' ? colors.text : colors.white })), children === null || children === void 0 ? void 0 :
        children(message)));
});
//# sourceMappingURL=BaseChatMessage.js.map