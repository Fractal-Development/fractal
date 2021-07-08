import React from 'react';
import { useTheme, Box, Text, RadioGroup } from '../../../src';

export function RadioFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Radio Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <RadioGroup
                    radioButtons={[
                        { value: '1', label: 'Option One' },
                        { value: '2', label: 'Option Two' },
                        { value: '3', label: 'Option Three' }
                    ]}
                    onValueChange={(value: string) => console.log(value)}
                />
            </Box>
        </>
    );
}
