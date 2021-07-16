import React, { Fragment } from 'react';
import { Box, Text, useTheme } from '@bma98/fractal-ui';
import { AudioMessagePlayer } from '@bma98/fractal-media';
export function AudioMessagePlayerExample() {
    const { spacings } = useTheme();
    return (React.createElement(Fragment, null,
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Audio Message Player Example"),
        React.createElement(Box, { marginBottom: spacings.m },
            React.createElement(AudioMessagePlayer, { audioSrc: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3' }))));
}
//# sourceMappingURL=AudioMessagePlayerExample.js.map