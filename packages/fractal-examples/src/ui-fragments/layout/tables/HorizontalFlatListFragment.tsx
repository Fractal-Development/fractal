import React, { useEffect, useState } from 'react';
import { Layer, HorizontalFlatList, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, rowRendererHorizontalTable, tableDummyData } from './tableHelpers';

function Table(): JSX.Element {
    const { sizes } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
    const width = useSizeValue('width');

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(tableDummyData));
    }, [width]);

    return (
        <Layer flex={1}>
            <HorizontalFlatList
                key={width}
                rowWidth={100}
                rowHeight={sizes.baseRowHeight}
                dataProvider={dataProviderState}
                rowRenderer={rowRendererHorizontalTable}
            />
        </Layer>
    );
}

export function HorizontalFlatListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Horizontal FlatList Fragment
            </Text>
            <Layer height={200} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer flex={1}>
                    <Table />
                </Layer>
            </Layer>
        </>
    );
}
