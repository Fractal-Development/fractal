import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ChipFragment } from '../../../fragments/ui-fragments';

export function ChipFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ChipFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
