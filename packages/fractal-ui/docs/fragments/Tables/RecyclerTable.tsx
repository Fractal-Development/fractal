import React, { useEffect, useMemo, useState } from 'react';
import {
    SearchBar,
    TableContainer,
    useTheme,
    MemoizedBaseRow,
    HorizontalLayer,
    CheckBox,
    Layer,
    Text,
    OptionsButton,
    LayoutProvider,
    RecyclerView,
    DataProvider
} from '../../../src';
import { useSizeValue } from '@bma98/size-class';

// Performance is incredible when all rows have the same size(recycling is 100% effective).
// Performance is good when all rows have different sizes.

const data = Array<number>();

for (let i = 0; i < 1001; i++) {
    data.push(i);
}

const heights: Array<number | undefined> = data.map(() => undefined);

interface RowExampleProps {
    style?: any;
    index?: number;
}

export function RowExample({ index = 0, ...others }: RowExampleProps): JSX.Element {
    const { spacings, colors } = useTheme();

    return (
        <MemoizedBaseRow addSeparator={index !== 1000} paddingTop={spacings.s} {...others}>
            <HorizontalLayer width={'100%'} alignItems={'center'}>
                <CheckBox value={false} marginRight={spacings.s} />
                <Layer flex={1}>
                    <Text>Google</Text>
                </Layer>
                <Layer flex={1}>
                    <Text numberOfLines={1}>Brandon Maldonado Alonso</Text>
                </Layer>
                <Layer flex={1}>
                    <Text>{data[index]}</Text>
                </Layer>
                <HorizontalLayer flex={1} alignItems={'center'}>
                    <Layer
                        backgroundColor={colors.successInteractiveColor}
                        width={16}
                        height={16}
                        borderRadius={8}
                        marginRight={spacings.s}
                    />
                    <Text>Activo</Text>
                </HorizontalLayer>
                <OptionsButton />
            </HorizontalLayer>
        </MemoizedBaseRow>
    );
}

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

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function itemHeightCalulator(): number {
    return randomIntFromInterval(65, 200);
}

const rowRenderer = (_: any, __: any, index: number | undefined) => {
    return <RowExample index={index} />;
};

const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});

export function TableTwo(): JSX.Element {
    const { spacings } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(data));
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
        setDataProviderState(dataProvider.cloneWithRows(data));
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

export function RecyclerTable(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Table Example</Text>
            <Layer height={500} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer flex={1}>
                    <TableTwo />
                </Layer>
            </Layer>
        </>
    );
}
