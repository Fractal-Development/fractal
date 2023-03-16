import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
import { HorizontalFlatListFragment, VerticalFlatListFragment } from '../fragments/ui-fragments';

export function ListsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <HorizontalFlatListFragment />
                    <VerticalFlatListFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
