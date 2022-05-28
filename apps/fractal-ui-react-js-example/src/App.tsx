import React from 'react';
// import { MainExample } from '@bma98/fractal-examples';
import { FractalAppRoot, SafeAreaLayer, Text } from '@bma98/fractal-ui';
console.log(FractalAppRoot);
export default function App() {
    return (
        <FractalAppRoot>
            <SafeAreaLayer>
                <Text>Hola</Text>
            </SafeAreaLayer>
        </FractalAppRoot>
    );
}
