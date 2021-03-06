import React, { useEffect, useState } from 'react';
import { Layer, VerticalFlatList, SearchBar, TableContainer, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, rowRenderer, tableDummyData } from './util/tableHelpers';

function Table(): JSX.Element {
    const { spacings, sizes } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
    const width = useSizeValue('width');

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(tableDummyData));
    }, [width]);

    return (
        <TableContainer title="Fixed Row Height" flex={1}>
            <SearchBar placeholder="Buscar" buttonText="Buscar" marginBottom={spacings.lg} enableSearchButton />
            <Layer flex={1}>
                <VerticalFlatList key={width} rowHeight={sizes.baseRowHeight} dataProvider={dataProviderState} rowRenderer={rowRenderer} />
            </Layer>
        </TableContainer>
    );
}

export function VerticalFlatListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Vertical FlatList Fragment
            </Text>
            <Layer height={500} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer flex={1}>
                    <Table />
                </Layer>
            </Layer>
        </>
    );
}
