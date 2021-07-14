import React from 'react';
import { useTheme, Box, Text, ErrorMessage } from '@bma98/fractal-ui';
import { BuggyComponent } from './BuggyComponent';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

function logErrorToService(error: Error, componentStack: string) {
    console.log('Log Error To Service: ', { error, componentStack });
}

export function ErrorMessageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Error Message Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <ErrorMessage onError={logErrorToService}>
                    <BuggyComponent />
                </ErrorMessage>
            </Box>
        </>
    );
}
