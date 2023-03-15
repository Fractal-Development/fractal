import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
