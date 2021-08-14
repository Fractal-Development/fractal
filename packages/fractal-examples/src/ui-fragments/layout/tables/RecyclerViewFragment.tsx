import React, { useMemo, useState } from 'react';
import { Layer, LayoutProvider, MemoizedBaseRow, AutoSizeRecyclerView, TableContainer, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { dataProvider, itemHeightCalculator, rowRenderer, tableDummyData } from './util/tableHelpers';

const heights: Array<number | undefined> = tableDummyData.map(() => undefined);

function TitleRow(): JSX.Element {
    const { colors } = useTheme();
    return (
        <MemoizedBaseRow addSeparator>
            <Text color={colors.label} fontWeight={700}>
                NOMBRE
            </Text>
        </MemoizedBaseRow>
    );
}

export function RecyclerViewFragment(): JSX.Element {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
    const width = useSizeValue('width');

    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            () => {
                return 0;
            },
            (_, dim, index) => {
                let height = heights[index];
                if (height != null) {
                    dim.height = height;
                } else {
                    height = itemHeightCalculator();
                    heights[index] = height;
                    dim.height = height;
                }
                dim.width = width;
                return;
            }
        );
    }, [width]);

    return (
        <TableContainer title={'RecyclerViewFragmentScreen'} flex={1}>
            <TitleRow />
            <Layer flex={1}>
                <AutoSizeRecyclerView
                    layoutProvider={layoutProvider}
                    dataProvider={dataProviderState}
                    rowRenderer={rowRenderer}
                    initialRenderIndex={1000}
                />
            </Layer>
        </TableContainer>
    );
}
