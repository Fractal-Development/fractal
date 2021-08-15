import React, { ReactElement } from 'react';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { RecyclerViewFragment } from '../ui-fragments';
import { PaddingLayer } from '@bma98/fractal-ui';

export function RecyclerViewFragmentScreen(): ReactElement {
    return (
        <NavigationLayer>
            <PaddingLayer flex={1}>
                <RecyclerViewFragment />
            </PaddingLayer>
        </NavigationLayer>
    );
}
