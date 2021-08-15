import React, { ReactElement } from 'react';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { ChipFragment } from '../ui-fragments';
import { PaddingLayer } from '@bma98/fractal-ui';

export function ChipFragmentScreen(): ReactElement {
    return (
        <NavigationLayer>
            <PaddingLayer flex={1}>
                <ChipFragment />
            </PaddingLayer>
        </NavigationLayer>
    );
}
