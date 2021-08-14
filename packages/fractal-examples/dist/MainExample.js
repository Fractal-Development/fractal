import React, { useCallback, useMemo, useState } from 'react';
import { DetailsRow, FractalAppRoot, Layer, LayoutProvider, PaddingLayer, SearchBar, TableContainer, TouchableOpacity, useTheme, AutoSizeRecyclerView } from '@bma98/fractal-ui';
import { dataProvider } from './ui-fragments/layout/tables/util/tableHelpers';
import { useSizeValue } from '@bma98/size-class';
import { StackScreen, useHistory, NavigationRouter, NavigationBarConfig, StackNavigator } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { NavigationLayer } from '@bma98/fractal-navigation';
const screens = [
    {
        name: 'RecyclerViewFragmentScreen',
        path: '/recycler_view_fragment_screen'
    }
];
const lastScreenIndex = screens.length - 1;
export function RootScreen() {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(screens));
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
            React.createElement(DetailsRow, { title: data.name, details: data.path, addSeparator: index !== lastScreenIndex })));
    }, [history]);
    return (React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: 'Fragments', largeTitle: true }), isRootRoute: true, path: '/' },
        React.createElement(NavigationLayer, null,
            React.createElement(PaddingLayer, null,
                React.createElement(TableContainer, { title: 'Fragments' },
                    React.createElement(SearchBar, { placeholder: 'Buscar', buttonText: 'Buscar', marginBottom: spacings.lg, enableSearchButton: true }),
                    React.createElement(Layer, { flex: 1 },
                        React.createElement(AutoSizeRecyclerView, { layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer })))))));
}
export function MainExample() {
    return (React.createElement(FractalAppRoot, { handleThemeManually: true },
        React.createElement(NavigationRouter, null,
            React.createElement(StackNavigator, { path: '/' },
                React.createElement(RootScreen, null),
                React.createElement(RecyclerViewFragmentScreen, null)))));
}
//# sourceMappingURL=MainExample.js.map