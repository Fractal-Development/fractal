import React from 'react';
import { Box, Text, useTheme } from '@fractal-software/fractal-ui';
import { AudioMessagePlayer } from '@fractal-software/fractal-media';

export function AudioMessagePlayerExample(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Audio Message Player Example
            </Text>
            <Box marginBottom={spacings.m}>
                <AudioMessagePlayer audioSrc='https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3' />
            </Box>
        </>
    );
}
