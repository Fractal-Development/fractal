import React from 'react';
import { Screen, ScreenStack } from 'react-native-screens';
import { MainExample } from '@bma98/fractal-examples';
import { NativeNavigationBar } from '@bma98/fractal-navigation';

export default function App() {
    return (
        <ScreenStack>
            <Screen>
                <NativeNavigationBar goBack={() => {}} />
                <MainExample />
            </Screen>
        </ScreenStack>
    );
}
