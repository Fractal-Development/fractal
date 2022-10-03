import React from 'react';
import { Text, View } from 'react-native';
import { Layer } from '@bma98/fractal-ui';
import { MainExample } from '@bma98/fractal-examples';

export default function App() {
    return (
        <Layer flex={1} alignItems='center' justifyContent='center'>
            <Text>Welcome to Fractal UI</Text>
        </Layer>
    );
}
