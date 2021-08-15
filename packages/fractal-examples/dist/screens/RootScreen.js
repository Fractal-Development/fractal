import React, { useCallback, useMemo, useState } from 'react';
import { Layer, LayoutProvider, PaddingLayer, SearchBar, TableContainer, TouchableOpacity, useTheme, AutoSizeRecyclerView, SimpleRow } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { useHistory } from '@bma98/fractal-navigation-router';
import { dataProvider } from '../ui-fragments/layout/tables/util/tableHelpers';
import { lastScreenIndex, screensArray } from './util/screens';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
export function RootScreen() {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(screensArray));
    const width = useSizeValue('width');
    const { sizes, spacings } = useTheme();
    const history = useHistory();
    const layoutProvider = useMemo(() => {
        return new LayoutProvider(() => {
            return 0;
        }, (_, dim) => {
            dim.height = sizes.baseRowHeight;
            dim.width = width;
            return;
        });
    }, [width, sizes.baseRowHeight]);
    const rowRenderer = useCallback((_, data, index) => {
        const goToItem = () => {
            history.push(data.path);
        };
        return (React.createElement(TouchableOpacity, { onPress: goToItem },
            React.createElement(SimpleRow, { title: data.name, addSeparator: index !== lastScreenIndex })));
    }, [history]);
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(TableContainer, { title: 'Table Container', flex: 1 },
                React.createElement(SearchBar, { placeholder: 'Buscar', buttonText: 'Buscar', marginBottom: spacings.lg, enableSearchButton: true }),
                React.createElement(Layer, { flex: 1 },
                    React.createElement(AutoSizeRecyclerView, { layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer }))))));
}
//# sourceMappingURL=RootScreen.js.map