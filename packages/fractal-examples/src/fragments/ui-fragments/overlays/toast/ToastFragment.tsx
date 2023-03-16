import React from 'react';
import { Box, Button, Text, TOAST_DURATIONS, useTheme, useToast } from '@fractal-software/fractal-ui';

export function ToastFragment() {
    const { spacings } = useTheme();
    const toast = useToast();

    const showNewToast = () => {
        toast('New Toast Message');
    };

    const showNewToast2 = () => {
        toast('New Toast Message With Long Duration', { duration: TOAST_DURATIONS.LONG });
    };

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Toast Fragment
            </Text>
            <Box>
                <Button variant='main' text='Toggle Toast' onPress={showNewToast} marginBottom={spacings.m} />
                <Button variant='main' text='Toggle Toast Long Duration' onPress={showNewToast2} />
            </Box>
        </>
    );
}
