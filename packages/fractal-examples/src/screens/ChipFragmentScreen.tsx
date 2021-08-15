import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { ChipFragment } from '../ui-fragments';
import { PaddingLayer } from '@bma98/fractal-ui';

export function ChipFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ChipFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
