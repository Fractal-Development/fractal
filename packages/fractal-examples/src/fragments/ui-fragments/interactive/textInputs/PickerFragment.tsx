import React from 'react';
import { useTheme, Box, Picker, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function PickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Picker Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Picker
                    onChange={(value) => console.log(value)}
                    iosDoneText='Done'
                    items={[
                        ['1', 'Hoy'],
                        ['2', 'Ayer'],
                        ['3', 'Prueba'],
                        ['4', 'Cuatro'],
                        ['5', 'Cinco']
                    ]}
                    defaultValue='3'
                    marginBottom={spacings.s}
                />
                <Picker
                    iosDoneText='Done'
                    items={[
                        ['1', 'Hoy'],
                        ['2', 'Ayer'],
                        ['3', 'Prueba ( deshabilitado / disabled )'],
                        ['4', 'Cuatro'],
                        ['5', 'Cinco']
                    ]}
                    defaultValue='3'
                    disabled
                />
            </Box>
        </>
    );
}
