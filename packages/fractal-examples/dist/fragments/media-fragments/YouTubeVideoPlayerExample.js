import React from 'react';
import { Box, Text, useTheme } from '@bma98/fractal-ui';
import { YouTubeVideoPlayer } from '@bma98/fractal-media';
export function YouTubeVideoPlayerExample() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "YouTube Video Example"),
        React.createElement(Box, { marginBottom: spacings.m },
            React.createElement(YouTubeVideoPlayer, { source: 'https://www.youtube.com/watch?v=0I647GU3Jsc', width: 304, height: 171 }))));
}
//# sourceMappingURL=YouTubeVideoPlayerExample.js.map