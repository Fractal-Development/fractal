import React from 'react';
import { useTheme, ChipList, Layer, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

interface Tag {
    id: string;
    value: string;
}

export function ChipListFragment(): JSX.Element {
    const { spacings } = useTheme();

    const tags: Array<Tag> = [
        { id: '0', value: 'tag 1' },
        { id: '1', value: 'tag 2' },
        { id: '2', value: 'tag 3' },
        { id: '3', value: 'tag 4' },
        { id: '3', value: 'tag 5' }
    ];

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Chip List Fragment
            </Text>
            <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <ChipList
                    data={tags}
                    getLabel={(item) => {
                        console.log(item);
                        return item.value;
                    }}
                    onItemPress={(item) => {
                        console.log(item);
                    }}
                />
            </Layer>
        </>
    );
}
