import React, { useEffect, useState } from 'react';
import { Box, HorizontalFlatList, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, rowRendererHorizontalTable, tableDummyData } from './util/tableHelpers';

function Table(): JSX.Element {
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
    const width = useSizeValue('width');

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(tableDummyData));
    }, [width]);

    return (
        <HorizontalFlatList
            key={width}
            rowWidth={100}
            rowHeight={100}
            dataProvider={dataProviderState}
            rowRenderer={rowRendererHorizontalTable}
        />
    );
}

export function HorizontalFlatListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Horizontal FlatList Fragment
            </Text>
            <Box height={120} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Table />
            </Box>
        </>
    );
}
