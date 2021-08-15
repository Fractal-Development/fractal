import React from 'react';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { ChipFragment } from '../ui-fragments';
import { PaddingLayer } from '@bma98/fractal-ui';
export function ChipFragmentScreen() {
    return (React.createElement(NavigationLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(ChipFragment, null))));
}
//# sourceMappingURL=ChipFragmentScreen.js.map