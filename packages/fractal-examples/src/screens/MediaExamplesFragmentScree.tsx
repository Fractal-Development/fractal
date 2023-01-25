import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
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
