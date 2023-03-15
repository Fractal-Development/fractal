import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
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
