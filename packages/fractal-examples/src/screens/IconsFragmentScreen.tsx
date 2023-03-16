import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { IconsFragment } from '../fragments/ui-fragments/IconsFragment';

export function IconsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer>
                <IconsFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
