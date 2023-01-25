import React from 'react';
import { AuthenticationReactRouterExample } from '@bma98/fractal-examples';
import { firebaseConfig } from './firebaseConfig';

export default function App() {
    return <AuthenticationReactRouterExample firebaseConfig={firebaseConfig} />;
}
