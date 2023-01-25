import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
