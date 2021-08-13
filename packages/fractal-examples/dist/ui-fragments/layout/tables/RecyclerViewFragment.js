import React, { useMemo, useState } from 'react';
import { Layer, LayoutProvider, MemoizedBaseRow, RecyclerView, SearchBar, TableContainer, Text, useTheme } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { dataProvider, itemHeightCalculator, rowRenderer, tableDummyData } from './util/tableHelpers';
const heights = tableDummyData.map(() => undefined);
function TitleRow() {
    const { colors } = useTheme();
    return (React.createElement(MemoizedBaseRow, { addSeparator: true },
        React.createElement(Text, { color: colors.label, fontWeight: 700 }, "NOMBRE")));
}
function Table() {
    const { spacings } = useTheme();
    const [dataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
    const width = useSizeValue('width');
    const layoutProvider = useMemo(() => {
        return new LayoutProvider(() => {
            return 0;
        }, (_, dim, index) => {
            let height = heights[index];
            if (height != null) {
                dim.height = height;
            }
            else {
                height = itemHeightCalculator();
                heights[index] = height;
                dim.height = height;
            }
            dim.width = width;
            return;
        });
    }, [width]);
    return (React.createElement(TableContainer, { title: '', height: 500 },
        React.createElement(SearchBar, { placeholder: 'Buscar', buttonText: 'Buscar', marginBottom: spacings.lg, enableSearchButton: true }),
        React.createElement(TitleRow, null),
        React.createElement(Layer, { height: 200 },
            React.createElement(RecyclerView, { key: width, layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer, initialRenderIndex: 1000, style: { height: '200px' } }))));
}
export function RecyclerViewFragment() {
    const { spacings } = useTheme();
    return (React.createElement(Layer, { marginBottom: spacings.m },
        React.createElement(Text, Object.assign({ marginBottom: spacings.m, variant: 'title' }, getTitleTextAccessibilityProps(1)), "RecyclerView Fragment"),
        React.createElement(Table, null)));
}
//# sourceMappingURL=RecyclerViewFragment.js.map