import React from 'react';
import { StackScreen, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { ChipFragment } from '../ui-fragments';
import { screens } from './util/screens';
import { PaddingLayer } from '@bma98/fractal-ui';
export function ChipFragmentScreen() {
    return (React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.chipFragment.name }), path: screens.chipFragment.path },
        React.createElement(NavigationLayer, null,
            React.createElement(PaddingLayer, { flex: 1 },
                React.createElement(ChipFragment, null)))));
}
//# sourceMappingURL=ChipFragmentScreen.js.map