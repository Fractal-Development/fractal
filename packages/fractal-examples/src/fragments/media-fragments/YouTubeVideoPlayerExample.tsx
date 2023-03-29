import React from 'react';
import { Box, Text, useTheme } from '@fractal-software/fractal-ui';
import { YouTubeVideoPlayer } from '@fractal-software/fractal-media';

export function YouTubeVideoPlayerExample(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                YouTube Video Example
            </Text>
            <Box marginBottom={spacings.m}>
                <YouTubeVideoPlayer source='https://www.youtube.com/watch?v=0I647GU3Jsc' width={304} height={171} />
            </Box>
        </>
    );
}
