import React from 'react';
import { Box, Text, AutoSizeVirtualList, useTheme } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { rowRendererHorizontalTable, tableDummyData } from './util/tableHelpers';

function Table(): JSX.Element {
    return <AutoSizeVirtualList horizontal data={tableDummyData} estimatedItemSize={100} renderItem={rowRendererHorizontalTable} />;
}

export function HorizontalFlatListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Horizontal FlatList Fragment
            </Text>
            <Box minHeight={132} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Table />
            </Box>
        </>
    );
}
