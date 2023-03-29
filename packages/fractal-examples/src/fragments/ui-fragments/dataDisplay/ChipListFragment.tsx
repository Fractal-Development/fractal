import { useTheme, ChipList, Layer, Text, Box } from '@fractal-software/fractal-ui';
import React from 'react';

import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

interface Tag {
    id: string;
    value: string;
}

export function ChipListFragment(): JSX.Element {
    const { spacings } = useTheme();

    const tags: Tag[] = [
        { id: '0', value: 'tag 1' },
        { id: '1', value: 'tag 2' },
        { id: '2', value: 'tag 3' },
        { id: '3', value: 'tag 4' },
        { id: '4', value: 'tag 5' },
        { id: '5', value: 'tag 6' },
        { id: '6', value: 'tag 7' },
        { id: '7', value: 'tag 8' },
        { id: '8', value: 'tag 9' },
        { id: '9', value: 'tag 10' },
        { id: '10', value: 'tag 11' },
        { id: '11', value: 'tag 12' },
        { id: '12', value: 'tag 13' },
        { id: '13', value: 'tag 14' },
        { id: '14', value: 'tag 15' }
    ];

    return (
        <Box>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Chip List Fragment
            </Text>
            <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
                <ChipList
                    data={tags}
                    getLabel={(item) => item.value}
                    onItemPress={(item) => {
                        console.log(item);
                    }}
                    height={120}
                />
            </Layer>
        </Box>
    );
}
