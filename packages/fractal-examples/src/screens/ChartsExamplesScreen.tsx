import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
import { ChartsExamples } from '../fragments/charts-fragments';

export function ChartsExamplesScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <ChartsExamples />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
