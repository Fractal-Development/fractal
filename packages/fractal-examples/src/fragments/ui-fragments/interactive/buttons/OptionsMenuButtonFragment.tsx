import React from 'react';
import { useTheme, Box, Text, PopoverOptionsMenuButton, ChevronDownIcon } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

const customIcon = (color: string) => <ChevronDownIcon height={24} width={24} fill={color} />;

export function OptionsMenuButtonFragment(): JSX.Element {
    const { spacings } = useTheme();
    const optionsValue = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Options Menu Button Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <PopoverOptionsMenuButton
                    options={optionsValue}
                    onOptionPress={(value) => {
                        console.log(value);
                    }}
                    customIcon={customIcon}
                />
            </Box>
        </>
    );
}
