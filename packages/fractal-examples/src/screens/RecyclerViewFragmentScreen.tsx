import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { RecyclerViewFragment } from '../ui-fragments';

export function RecyclerViewFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <RecyclerViewFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
