import React from 'react';
import { useTheme, Box, Text, ErrorMessage } from '@bma98/fractal-ui';
import { BuggyComponent } from './BuggyComponent';

function logErrorToService(error: Error, componentStack: string) {
    console.log('Log Error To Service: ', { error, componentStack });
}

export function ErrorMessageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Error Message Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <ErrorMessage onError={logErrorToService}>
                    <BuggyComponent />
                </ErrorMessage>
            </Box>
        </>
    );
}
