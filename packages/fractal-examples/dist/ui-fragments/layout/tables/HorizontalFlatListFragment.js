import React, { useEffect, useState } from 'react';
import { Layer, HorizontalFlatList, SearchBar, TableContainer, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, rowRenderer, horizontalTableDummyData } from './tableHelpers';
function Table() {
    const { spacings, sizes } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(horizontalTableDummyData));
    const width = useSizeValue('width');
    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(horizontalTableDummyData));
    }, [width]);
    return (React.createElement(TableContainer, { title: 'Horizontal FlatList', flex: 1 },
        React.createElement(SearchBar, { placeholder: 'Buscar', buttonText: 'Buscar', marginBottom: spacings.lg, enableSearchButton: true }),
        React.createElement(Layer, { flex: 1 },
            React.createElement(HorizontalFlatList, { key: width, rowWidth: 100, rowHeight: sizes.baseRowHeight, dataProvider: dataProviderState, rowRenderer: rowRenderer }))));
}
export function HorizontalFlatListFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Horizontal FlatList Fragment"),
        React.createElement(Layer, { height: 500, marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Layer, { flex: 1 },
                React.createElement(Table, null)))));
}
//# sourceMappingURL=HorizontalFlatListFragment.js.map