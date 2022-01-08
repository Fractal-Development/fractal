import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ChipListFragment } from '../../../fragments/ui-fragments';

export function ChipListFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ChipListFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
