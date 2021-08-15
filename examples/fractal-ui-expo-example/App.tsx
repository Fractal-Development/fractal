import React from 'react';
import { MainExample } from '@bma98/fractal-examples';
import { NavigationRouter } from '@bma98/fractal-navigation-router';

export default function App() {
    return (
        <NavigationRouter>
            <MainExample />
        </NavigationRouter>
    );
}
