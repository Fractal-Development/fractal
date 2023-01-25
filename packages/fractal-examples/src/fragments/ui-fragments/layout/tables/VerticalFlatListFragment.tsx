import React, { useCallback } from 'react';
import { DetailsRow, Layer, SearchBar, TableContainer, Text, useTheme, VirtualList } from '@fractal/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { tableDummyData } from './util/tableHelpers';

function Table(): JSX.Element {
    const { spacings, sizes } = useTheme();

    const rowRenderer = useCallback(
        ({ index }) => {
            const text = `${tableDummyData[index]}`;
            return (
                <DetailsRow title={text} details={text} addSeparator={index !== tableDummyData.length - 1} height={sizes.baseRowHeight} />
            );
        },
        [sizes.baseRowHeight]
    );

    return (
        <TableContainer title='Fixed Row Height' flex={1}>
            <SearchBar placeholder='Buscar' buttonText='Buscar' marginBottom={spacings.lg} enableSearchButton />
            <Layer flex={1}>
                <VirtualList data={tableDummyData} estimatedItemSize={sizes.baseRowHeight} renderItem={rowRenderer} />
            </Layer>
        </TableContainer>
    );
}

export function VerticalFlatListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Vertical FlatList Fragment 2
            </Text>
            <Layer height={500} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer flex={1}>
                    <Table />
                </Layer>
            </Layer>
        </>
    );
}
