import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer, ScrollView } from '@bma98/fractal-ui';
import { MediaExamples } from '../fragments/media-fragments';

export function MediaExamplesFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView>
                <PaddingLayer>
                    <MediaExamples />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
