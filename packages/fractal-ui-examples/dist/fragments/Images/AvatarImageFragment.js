import React, { useCallback } from 'react';
import { useTheme, Box, Layer, Avatar, Image, Text } from '@bma98/fractal-ui';
export function AvatarImageFragment() {
    const { spacings } = useTheme();
    const resizeModes = ['contain', 'center', 'repeat', 'cover', 'stretch'];
    const renderItem = useCallback((resizeMode) => {
        const text = 'Image with ' + resizeMode + ' resize mode';
        return (React.createElement(React.Fragment, { key: resizeMode },
            React.createElement(Text, { variant: 'subtitle', alignItems: 'center', marginTop: spacings.m, marginBottom: spacings.xs }, text),
            React.createElement(Box, { marginBottom: spacings.s, height: 500 },
                React.createElement(Image, { source: 'https://picsum.photos/id/870/200/300', label: 'Asset', resizeMode: resizeMode, height: '100%', borderRadius: 16, marginTop: spacings.s }))));
    }, [spacings.m, spacings.s, spacings.xs]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Avatar and Image Example"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Box, { marginBottom: spacings.s, flexDirection: 'row' },
                React.createElement(Avatar, { source: 'https://picsum.photos/id/370/200', label: 'Avatar' }),
                React.createElement(Image, { source: 'https://picsum.photos/id/870/200/300', label: 'Asset', width: 100, height: 64, borderRadius: 16, marginLeft: spacings.m })),
            resizeModes.map(renderItem))));
}
//# sourceMappingURL=AvatarImageFragment.js.map