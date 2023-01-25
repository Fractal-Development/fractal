import React from 'react';
import { useTheme, Box, Text } from '@fractal/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function MessageInputFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Message Input Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                {/* <MessageInput onSend={(message: string) => console.log('Message: ', message)} placeholder='Escribe aquí' /> */}
            </Box>
        </>
    );
}
