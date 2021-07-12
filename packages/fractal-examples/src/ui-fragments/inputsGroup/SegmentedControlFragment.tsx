import React, { useState } from 'react';
import { useTheme, Box, SegmentedControl, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function SegmentedControlFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Segmented Control Example
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <SegmentedControl
                    selectedIndex={selectedIndex}
                    values={['One', 'Two']}
                    onChange={(value, index) => {
                        console.log(value);
                        setSelectedIndex(index);
                    }}
                    onValueChange={(value) => {
                        console.log('On Value Change: ', value);
                    }}
                />
            </Box>
        </>
    );
}
