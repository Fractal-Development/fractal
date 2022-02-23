import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ActivityIndicatorFragment } from '../../../fragments/ui-fragments';
export function ActivityIndicatorFragmentScreen() {
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(ActivityIndicatorFragment, null))));
}
//# sourceMappingURL=ActivityIndicatorFragmentScreen.js.map