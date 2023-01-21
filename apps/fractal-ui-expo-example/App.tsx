import React from 'react';
import { AuthExample } from '@bma98/fractal-examples';
import { firebaseConfig } from './firebaseConfig';

export default function App() {
    return <AuthExample firebaseConfig={firebaseConfig} />;
}
