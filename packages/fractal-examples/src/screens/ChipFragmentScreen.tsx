import React, { ReactElement } from 'react';
import { StackScreen, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { ChipFragment } from '../ui-fragments';
import { componentScreens } from './util/screens';
import { PaddingLayer } from '@bma98/fractal-ui';

const data = componentScreens.find((item) => item.name === 'Chip Fragment');

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
