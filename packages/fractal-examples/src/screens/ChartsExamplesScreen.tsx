import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
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
