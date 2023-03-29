import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { RecyclerViewFragment } from '../fragments/ui-fragments';

export function RecyclerViewFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <RecyclerViewFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
