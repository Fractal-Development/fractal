import React from 'react';
import { Layer, MemoizedBaseRow, Text, useTheme, Box, AutoSizeVirtualList } from '@fractal/fractal-ui';
import { rowRenderer, tableDummyData } from './util/tableHelpers';

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
    return (
        <Box flex={1}>
            <TitleRow />
            <Layer flex={1}>
                <AutoSizeVirtualList data={tableDummyData} renderItem={rowRenderer} estimatedItemSize={122} initialScrollIndex={1000} />
            </Layer>
        </Box>
    );
}
