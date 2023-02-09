import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
import { HorizontalFlatListFragment, VerticalFlatListFragment } from '../fragments/ui-fragments';

export function ListsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView>
                <PaddingLayer>
                    <HorizontalFlatListFragment />
                    <VerticalFlatListFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}