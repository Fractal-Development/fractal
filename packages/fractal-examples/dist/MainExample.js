import React from 'react';
import { FractalAppRoot, PaddingLayer, Text } from '@bma98/fractal-ui';
import { NavigationBarConfig, NavigationRouter, SimpleTabBarItemLink, StackNavigator, StackScreen, TabNavigator, TabScreen } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';
import { ResponsiveSideTabBar, TabBarInsetsLayer } from '@bma98/fractal-navigation';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';
import { screens } from './screens/util/screens';
function renderReactIcon(color, size) {
    return React.createElement(ReactIcon, { fill: color, height: size, width: size });
}
function MainTabBar() {
    return (React.createElement(ResponsiveSideTabBar, null,
        React.createElement(SimpleTabBarItemLink, { path: routes.components, title: 'Components' }, renderReactIcon),
        React.createElement(SimpleTabBarItemLink, { path: routes.credits, title: 'Credits' }, renderReactIcon)));
}
export function MainExample() {
    return (React.createElement(FractalAppRoot, { handleThemeManually: true },
        React.createElement(NavigationRouter, null,
            React.createElement(TabNavigator, { tabBar: React.createElement(MainTabBar, null) },
                React.createElement(TabScreen, { path: routes.components },
                    React.createElement(TabBarInsetsLayer, null,
                        React.createElement(StackNavigator, { path: routes.components },
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: 'Fragments', largeTitle: true }), isRootRoute: true, path: routes.components },
                                React.createElement(RootScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.recyclerViewFragment.name }), path: screens.recyclerViewFragment.path },
                                React.createElement(RecyclerViewFragmentScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.chipFragment.name }), path: screens.chipFragment.path },
                                React.createElement(ChipFragmentScreen, null))))),
                React.createElement(TabScreen, { path: routes.credits },
                    React.createElement(TabBarInsetsLayer, null,
                        React.createElement(PaddingLayer, null,
                            React.createElement(Text, null, "Empty for now..."))))))));
}
//# sourceMappingURL=MainExample.js.map