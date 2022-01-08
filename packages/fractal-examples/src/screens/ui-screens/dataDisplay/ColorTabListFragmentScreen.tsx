import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ColorTabListFragment } from '../../../fragments/ui-fragments';

export function ColorTabListFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ColorTabListFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
