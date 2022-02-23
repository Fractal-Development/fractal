import React, { useEffect, useState } from 'react';
import { Box, HorizontalFlatList, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, rowRendererHorizontalTable, tableDummyData } from './util/tableHelpers';
function Table() {
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
    const width = useSizeValue('width');
    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(tableDummyData));
    }, [width]);
    return (React.createElement(HorizontalFlatList, { key: width, rowWidth: 100, rowHeight: 100, dataProvider: dataProviderState, rowRenderer: rowRendererHorizontalTable }));
}
export function HorizontalFlatListFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Horizontal FlatList Fragment"),
        React.createElement(Box, { height: 120, marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Table, null))));
}
//# sourceMappingURL=HorizontalFlatListFragment.js.map