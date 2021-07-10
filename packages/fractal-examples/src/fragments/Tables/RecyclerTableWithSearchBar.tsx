import React, { useEffect, useMemo, useState } from 'react';
import { Layer, LayoutProvider, MemoizedBaseRow, RecyclerView, SearchBar, TableContainer, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, itemHeightCalulator, rowRenderer, tableDummyData } from './tableHelpers';

const heights: Array<number | undefined> = tableDummyData.map(() => undefined);

export function TitleRow(): JSX.Element {
    const { colors } = useTheme();
    return (
        <MemoizedBaseRow addSeparator>
            <Text color={colors.label} fontWeight={700}>
                NOMBRE
            </Text>
        </MemoizedBaseRow>
    );
}

export function Table(): JSX.Element {
    const { spacings } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
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
                    height = itemHeightCalulator();
                    heights[index] = height;
                    dim.height = height;
                }
                dim.width = width - 64;
                return;
            }
        );
    }, [width]);

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(tableDummyData));
    }, [width]);

    return (
        <TableContainer title={'Table Two'} flex={1}>
            <SearchBar placeholder={'Buscar'} buttonText={'Buscar'} marginBottom={spacings.lg} enableSearchButton />
            <TitleRow />
            <Layer flex={1}>
                <RecyclerView
                    key={width}
                    layoutProvider={layoutProvider}
                    dataProvider={dataProviderState}
                    rowRenderer={rowRenderer}
                    initialRenderIndex={1000}
                />
            </Layer>
        </TableContainer>
    );
}

export function RecyclerTableWithSearchBar(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Recycler Table With SearchBar
            </Text>
            <Layer height={500} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer flex={1}>
                    <Table />
                </Layer>
            </Layer>
        </>
    );
}
