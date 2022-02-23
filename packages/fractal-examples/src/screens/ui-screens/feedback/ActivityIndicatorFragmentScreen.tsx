import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ActivityIndicatorFragment } from '../../../fragments/ui-fragments';

export function ActivityIndicatorFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ActivityIndicatorFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
