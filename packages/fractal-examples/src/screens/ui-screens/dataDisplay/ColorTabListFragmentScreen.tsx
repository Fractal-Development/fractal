import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
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
