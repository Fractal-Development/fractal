import React from 'react';
import { FractalAppRoot } from '@bma98/fractal-ui';
import { NavigationRouter, StackNavigator } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';
export function MainExample() {
    return (React.createElement(FractalAppRoot, { handleThemeManually: true },
        React.createElement(NavigationRouter, null,
            React.createElement(StackNavigator, { path: '/' },
                React.createElement(RootScreen, null),
                React.createElement(RecyclerViewFragmentScreen, null),
                React.createElement(ChipFragmentScreen, null)))));
}
//# sourceMappingURL=MainExample.js.map