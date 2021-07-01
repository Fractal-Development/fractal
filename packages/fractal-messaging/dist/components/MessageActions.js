import React, { useCallback } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { RoundedIconButton } from './RoundedIconButton';
export function MessageActions({ message, onFavoritePress, onSharePress }) {
    const { spacings } = useTheme();
    const handleFavorite = useCallback(() => onFavoritePress === null || onFavoritePress === void 0 ? void 0 : onFavoritePress(message), [message, onFavoritePress]);
    const handleShare = useCallback(() => onSharePress === null || onSharePress === void 0 ? void 0 : onSharePress(message), [message, onSharePress]);
    return (React.createElement(Layer, { padding: spacings.m },
        React.createElement(RoundedIconButton, { iconName: 'star', color: message.favorite ? '#ffc107' : '#999999', onPress: handleFavorite }),
        React.createElement(Layer, { height: spacings.m }),
        React.createElement(RoundedIconButton, { iconName: 'upload', color: '#999999', onPress: handleShare })));
}
//# sourceMappingURL=MessageActions.js.map