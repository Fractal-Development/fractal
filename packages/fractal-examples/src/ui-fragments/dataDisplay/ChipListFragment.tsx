import React from 'react';
import { useTheme, ChipList, Layer, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function ChipListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Chip List Fragment
            </Text>
            <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <ChipList
                    data={[]}
                    getLabel={(item) => {
                        console.log(item);
                        return item;
                    }}
                    onItemPress={(item) => {
                        console.log(item);
                    }}
                />
            </Layer>
        </>
    );
}
