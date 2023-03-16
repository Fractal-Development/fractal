import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
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
