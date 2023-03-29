import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
import { MediaExamples } from '../fragments/media-fragments';

export function MediaExamplesFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <MediaExamples />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
