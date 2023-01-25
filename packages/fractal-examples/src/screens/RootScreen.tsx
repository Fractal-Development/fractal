import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { useNavigate } from '@fractal/fractal-navigation-router';
import { Layer, PaddingLayer, SearchBar, TableContainer, TouchableOpacity, useTheme, VirtualList, SimpleRow } from '@fractal/fractal-ui';
import React, { ReactElement, useCallback, useState } from 'react';
import { Screen, lastScreenIndex, screensArray } from './util/screens';

export function RootScreen(): ReactElement {
    const [screensData, setScreensData] = useState(screensArray);
    const { spacings } = useTheme();
    const navigate = useNavigate();

    const rowRenderer = useCallback(
        ({ item, index }: { item: Screen; index: number }) => {
            const goToItem = () => {
                navigate(item.path);
            };

            return (
                <TouchableOpacity onPress={goToItem}>
                    <SimpleRow title={item.name} addSeparator={index !== lastScreenIndex} />
                </TouchableOpacity>
            );
        },
        [navigate]
    );

    const handleSearch = (search: string) => {
        if (search === '') {
            setScreensData(screensArray);
        } else {
            setScreensData(screensArray.filter((row) => row.name.includes(search)));
        }
    };

    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <TableContainer title='Table Container' flex={1}>
                    <SearchBar
                        placeholder='Buscar'
                        buttonText='Buscar'
                        marginBottom={spacings.lg}
                        enableSearchButton
                        onSearch={handleSearch}
                    />
                    <Layer flex={1}>
                        <VirtualList data={screensData} estimatedItemSize={35} renderItem={rowRenderer} />
                    </Layer>
                </TableContainer>
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
