import React, { ReactElement } from 'react';
import { StackScreen, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { ChipFragment } from '../ui-fragments';
import { screens } from './util/screens';
import { PaddingLayer } from '@bma98/fractal-ui';

const data = screens.find((item) => item.name === 'ChipFragmentScreen');

export function ChipFragmentScreen(): ReactElement {
    return (
        <StackScreen navBarConfig={<NavigationBarConfig title={data?.name} />} path={data?.path}>
            <NavigationLayer>
                <PaddingLayer flex={1}>
                    <ChipFragment />
                </PaddingLayer>
            </NavigationLayer>
        </StackScreen>
    );
}
