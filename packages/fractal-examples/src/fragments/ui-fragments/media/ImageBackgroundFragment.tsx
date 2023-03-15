import React from 'react';
import { useTheme, Box, ImageBackground, Text } from '@fractal/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function ImageBackgroundFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Image Background Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <ImageBackground
                    source='https://picsum.photos/id/870/200/300'
                    width={200}
                    height={200}
                    borderRadius={16}
                    justifyContent='center'
                >
                    <Text variant='button'>Lorem Ipsum is simply dummy text.</Text>
                </ImageBackground>
            </Box>
        </>
    );
}
