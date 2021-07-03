import React from 'react';
import { useTheme, Box, Text } from '@bma98/fractal-ui';

export function MessageInputFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Message Input Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                {/*<MessageInput onSend={(message: string) => console.log('Message: ', message)} placeholder='Escribe aquí' />*/}
            </Box>
        </>
    );
}
