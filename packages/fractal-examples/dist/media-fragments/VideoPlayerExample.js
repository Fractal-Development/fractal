import React from 'react';
import { Box, Text, useTheme } from '@bma98/fractal-ui';
import { Video } from '@bma98/fractal-media';
export function VideoPlayerExample() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Video Player Example"),
        React.createElement(Box, { marginBottom: spacings.m },
            React.createElement(Video, { source: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', useNativeControls: true, resizeMode: 'contain', style: { width: 304, height: 171 } }))));
}
//# sourceMappingURL=VideoPlayerExample.js.map