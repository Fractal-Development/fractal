import React from 'react';
import { FractalAppRoot } from '@bma98/fractal-ui';
import { NavigationRouter, SimpleTabBarItemLink, StackNavigator, TabNavigator, TabScreen } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';
import { TabBar } from '@bma98/fractal-navigation';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';
function renderReactIcon(color, size) {
    return React.createElement(ReactIcon, { fill: color, height: size, width: size });
}
function MainTabBar() {
    return (React.createElement(TabBar, { tabBarPosition: 'bottom' },
        React.createElement(SimpleTabBarItemLink, { path: '/components', title: 'Components' }, renderReactIcon)));
}
export function MainExample() {
    return (React.createElement(StackNavigator, { path: routes.components },
        React.createElement(RootScreen, null),
        React.createElement(RecyclerViewFragmentScreen, null),
        React.createElement(ChipFragmentScreen, null)));
    return (React.createElement(FractalAppRoot, { handleThemeManually: true },
        React.createElement(NavigationRouter, null,
            React.createElement(TabNavigator, { tabBar: React.createElement(MainTabBar, null) },
                React.createElement(TabScreen, { path: routes.components },
                    React.createElement(StackNavigator, { path: routes.components },
                        React.createElement(RootScreen, null),
                        React.createElement(RecyclerViewFragmentScreen, null),
                        React.createElement(ChipFragmentScreen, null)))))));
}
//# sourceMappingURL=MainExample.js.map