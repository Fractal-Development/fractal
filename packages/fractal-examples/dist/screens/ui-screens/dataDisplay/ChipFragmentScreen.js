import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ChipFragment } from '../../../fragments/ui-fragments';
export function ChipFragmentScreen() {
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(ChipFragment, null))));
}
//# sourceMappingURL=ChipFragmentScreen.js.map