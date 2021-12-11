import React from 'react';
import { Box, Text, useTheme, ImageBackground } from '@bma98/fractal-ui';
import { MediaPlayerButton } from '@bma98/fractal-media';

export function MediaPlayerButtonExample(): JSX.Element {
    const { spacings, borderRadius } = useTheme();

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Media Player Button Example
            </Text>
            <Box marginBottom={spacings.m} alignSelf='flex-start'>
                <ImageBackground
                    source='https://picsum.photos/id/103/200'
                    width={180}
                    height={180}
                    borderRadius={borderRadius.m}
                    alignItems='center'
                    justifyContent='center'
                >
                    <MediaPlayerButton size={100} onPress={() => alert('Play Pressed')} />
                </ImageBackground>
            </Box>
        </>
    );
}
