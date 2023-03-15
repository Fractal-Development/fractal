import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { AuthenticationScreenFragment } from '../fragments/auth-screen-fragments/AuthenticationScreenFragment';

export function AuthenticationScreenFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <AuthenticationScreenFragment />
        </NavigationBarInsetsLayer>
    );
}
