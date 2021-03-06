import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ErrorMessageFragment } from '../../../fragments/ui-fragments';

export function ErrorMessageFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ErrorMessageFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
