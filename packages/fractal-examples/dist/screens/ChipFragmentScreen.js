import React from 'react';
import { StackScreen, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { ChipFragment } from '../ui-fragments';
import { screens } from './util/screens';
import { PaddingLayer } from '@bma98/fractal-ui';
const data = screens.find((item) => item.name === 'Chip Fragment');
export function ChipFragmentScreen() {
    return (React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: data === null || data === void 0 ? void 0 : data.name }), path: data === null || data === void 0 ? void 0 : data.path },
        React.createElement(NavigationLayer, null,
            React.createElement(PaddingLayer, { flex: 1 },
                React.createElement(ChipFragment, null)))));
}
//# sourceMappingURL=ChipFragmentScreen.js.map