import React from 'react';
import { Platform } from 'react-native';
import { AuthenticationReactRouterExample } from '@fractal/fractal-examples';
import { AuthenticationReactNavigationExample } from '@fractal/fractal-examples/dist/native';
import { firebaseConfig } from './firebaseConfig';

export default function App() {
    if (Platform.OS === 'web') {
        return <AuthenticationReactRouterExample firebaseConfig={firebaseConfig} />;
    } else {
        return <AuthenticationReactNavigationExample firebaseConfig={firebaseConfig} />;
    }
}
