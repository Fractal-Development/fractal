import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import {
    DetailsRow,
    FractalAppRoot,
    Layer,
    LayoutProvider,
    PaddingLayer,
    SearchBar,
    TableContainer,
    TouchableOpacity,
    useTheme,
    AutoSizeRecyclerView
} from '@bma98/fractal-ui';
import { dataProvider } from './ui-fragments/layout/tables/util/tableHelpers';
import { useSizeValue } from '@bma98/size-class';
import { StackScreen, useHistory, NavigationRouter, NavigationBarConfig, StackNavigator } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { NavigationLayer } from '@bma98/fractal-navigation';

interface Screen {
    name: string;
    path: string;
}

const screens: Array<Screen> = [
    {
        name: 'RecyclerViewFragmentScreen',
        path: '/recycler_view_fragment_screen'
    }
];
const lastScreenIndex = screens.length - 1;

export function RootScreen(): ReactElement {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(screens));
    const width = useSizeValue('width');
    const { sizes, spacings } = useTheme();
    const history = useHistory();

    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            () => {
                return 0;
            },
            (_, dim) => {
                dim.height = sizes.baseRowHeight;
                dim.width = width;
                return;
            }
        );
    }, [width, sizes.baseRowHeight]);

    const rowRenderer = useCallback(
        (_, data: Screen, index: number | undefined) => {
            const goToItem = () => {
                history.push(data.path);
            };

            return (
                <TouchableOpacity onPress={goToItem}>
                    <DetailsRow title={data.name} details={data.path} addSeparator={index !== lastScreenIndex} />
                </TouchableOpacity>
            );
        },
        [history]
    );

    return (
        <StackScreen navBarConfig={<NavigationBarConfig title={'Fragments'} largeTitle />} isRootRoute path={'/'}>
            <NavigationLayer>
                <PaddingLayer>
                    <TableContainer title='Fragments'>
                        <SearchBar placeholder={'Buscar'} buttonText={'Buscar'} marginBottom={spacings.lg} enableSearchButton />
                        <Layer flex={1}>
                            <AutoSizeRecyclerView
                                layoutProvider={layoutProvider}
                                dataProvider={dataProviderState}
                                rowRenderer={rowRenderer}
                            />
                        </Layer>
                    </TableContainer>
                </PaddingLayer>
            </NavigationLayer>
        </StackScreen>
    );
}

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <NavigationRouter>
                <StackNavigator path='/'>
                    <RootScreen />
                    <RecyclerViewFragmentScreen />
                </StackNavigator>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
