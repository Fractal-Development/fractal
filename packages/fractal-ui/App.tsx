import React from 'react';
import { registerRootComponent } from 'expo';
import { MainExample } from './docs';

export function App(): JSX.Element {
    return <MainExample />;
}

export default registerRootComponent(App);
