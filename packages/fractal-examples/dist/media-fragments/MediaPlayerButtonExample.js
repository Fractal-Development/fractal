import React, { Fragment } from 'react';
import { Box, Text, useTheme, ImageBackground } from '@bma98/fractal-ui';
import { MediaPlayerButton } from '@bma98/fractal-media';
export function MediaPlayerButtonExample() {
    const { spacings, borderRadius } = useTheme();
    return (React.createElement(Fragment, null,
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Media Player Button Example"),
        React.createElement(Box, { marginBottom: spacings.m, alignSelf: 'flex-start' },
            React.createElement(ImageBackground, { source: 'https://picsum.photos/id/103/200', width: 180, height: 180, borderRadius: borderRadius.m, alignItems: 'center', justifyContent: 'center' },
                React.createElement(MediaPlayerButton, { size: 100, onPress: () => alert('Play Pressed') })))));
}
//# sourceMappingURL=MediaPlayerButtonExample.js.map