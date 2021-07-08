import React from 'react';
import { useTheme, Box, ImageBackground, Text } from '../../../src';

export function ImageBackgroundFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>ImageBackground Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <ImageBackground
                    source={'https://picsum.photos/id/870/200/300'}
                    width={200}
                    height={200}
                    borderRadius={16}
                    justifyContent={'center'}
                >
                    <Text variant={'button'}>Lorem Ipsum is simply dummy text.</Text>
                </ImageBackground>
            </Box>
        </>
    );
}
