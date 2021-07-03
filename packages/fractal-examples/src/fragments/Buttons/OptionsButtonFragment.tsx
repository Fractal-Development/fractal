import React from 'react';
import { useTheme, Box, Text, OptionsMenuButton, ChevronDownIcon } from '@bma98/fractal-ui';

export function OptionsButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    const optionsValue = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <>
            <Text variant={'title'}>Options Button Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <OptionsMenuButton
                    options={optionsValue}
                    onOptionPress={(value) => {
                        console.log(value);
                    }}
                    customIcon={(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                />
            </Box>
        </>
    );
}