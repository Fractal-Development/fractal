import React, { useEffect, useMemo, useState } from 'react';
import { Layer, LayoutProvider, MemoizedBaseRow, RecyclerView, SearchBar, TableContainer, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, itemHeightCalculator, rowRenderer, tableDummyData } from './tableHelpers';

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

function Table(): JSX.Element {
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
                    height = itemHeightCalculator();
                    heights[index] = height;
                    dim.height = height;
                }
                dim.width = width;
                return;
            }
        );
    }, [width]);

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(tableDummyData));
    }, [width]);

    return (
        <TableContainer title={''} flex={1}>
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

export function RecyclerViewFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                RecyclerView Fragment
            </Text>
            <Layer height={500} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer flex={1}>
                    <Table />
                </Layer>
            </Layer>
        </>
    );
}
