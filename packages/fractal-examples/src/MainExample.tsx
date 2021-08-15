import React, { ReactElement } from 'react';
import { FractalAppRoot } from '@bma98/fractal-ui';
import { NavigationRouter, SimpleTabBarItemLink, StackNavigator, TabNavigator, TabScreen } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';
import { TabBar } from '@bma98/fractal-navigation';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';

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
