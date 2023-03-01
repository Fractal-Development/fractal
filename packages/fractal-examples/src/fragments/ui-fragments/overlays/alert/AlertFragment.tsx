import React from 'react';
import { Box, Button, Text, useAlert, useTheme } from '@fractal/fractal-ui';

export function AlertFragment() {
    const { spacings } = useTheme();
    const alert = useAlert();

    const createCeroButtonAlert = () => {
        alert('Alert Title', 'My Alert Msg');
    };

    const createTwoButtonAlert = () => {
        alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]);
    };

    const createThreeButtonAlert = () => {
        alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
                style: 'destructive'
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'default' }
        ]);
    };

    const createFourButtonAlert = () => {
        alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Fourth',
                onPress: () => console.log('fourth pressed'),
                style: 'destructive'
            },
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
                style: 'destructive'
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'default' }
        ]);
    };

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Alert Fragment
            </Text>
            <Box>
                <Button text='0-Button Alert' onPress={createCeroButtonAlert} marginBottom={spacings.m} />
                <Button text='2-Button Alert' onPress={createTwoButtonAlert} marginBottom={spacings.m} />
                <Button text='3-Button Alert' onPress={createThreeButtonAlert} marginBottom={spacings.m} />
                <Button text='4-Button Alert' onPress={createFourButtonAlert} />
            </Box>
        </>
    );
}
