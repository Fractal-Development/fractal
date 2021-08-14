import React from 'react';
import { FractalAppRoot } from '@bma98/fractal-ui';
import { NavigationRouter, StackNavigator } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <NavigationRouter>
                <StackNavigator path='/'>
                    <RootScreen />
                    <RecyclerViewFragmentScreen />
                    <ChipFragmentScreen />
                </StackNavigator>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
