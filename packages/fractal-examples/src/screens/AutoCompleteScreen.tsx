import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { AutocompleteFragment } from '../fragments/ui-fragments';

export function AutoCompleteScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <AutocompleteFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
