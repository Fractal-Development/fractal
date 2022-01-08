import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { AuthenticationScreenFragment } from '../fragments/auth-screen-fragments/AuthenticationScreenFragment';

export function AuthenticationScreenFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <AuthenticationScreenFragment />
        </NavigationBarInsetsLayer>
    );
}
