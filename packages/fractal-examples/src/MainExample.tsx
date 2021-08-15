import React, { ReactElement } from 'react';
import { FractalAppRoot } from '@bma98/fractal-ui';
import {
    NavigationBarConfig,
    NavigationRouter,
    SimpleTabBarItemLink,
    StackNavigator,
    StackScreen,
    TabNavigator,
    TabScreen
} from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';
import { TabBar } from '@bma98/fractal-navigation';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';
import { screens } from './screens/util/screens';

function renderReactIcon(color, size) {
    return <ReactIcon fill={color} height={size} width={size} />;
}

function MainTabBar(): ReactElement {
    return (
        <TabBar tabBarPosition='bottom'>
            <SimpleTabBarItemLink path='/components' title='Components'>
                {renderReactIcon}
            </SimpleTabBarItemLink>
        </TabBar>
    );
}

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <NavigationRouter>
                <StackNavigator path={routes.components}>
                    <StackScreen navBarConfig={<NavigationBarConfig title={'Fragments'} largeTitle />} isRootRoute path={routes.components}>
                        <RootScreen />
                    </StackScreen>
                    <StackScreen
                        navBarConfig={<NavigationBarConfig title={screens.recyclerViewFragment.name} />}
                        path={screens.recyclerViewFragment.path}
                    >
                        <RecyclerViewFragmentScreen />
                    </StackScreen>
                    <ChipFragmentScreen />
                </StackNavigator>
            </NavigationRouter>
        </FractalAppRoot>
    );

    return (
        <FractalAppRoot handleThemeManually>
            <NavigationRouter>
                <TabNavigator tabBar={<MainTabBar />}>
                    <TabScreen path={routes.components}>
                        <StackNavigator path={routes.components}>
                            <RootScreen />
                            <RecyclerViewFragmentScreen />
                            <ChipFragmentScreen />
                        </StackNavigator>
                    </TabScreen>
                </TabNavigator>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
