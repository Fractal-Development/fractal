import React from 'react';
import { Screen, ScreenStack } from 'react-native-screens';
import { MainExample } from '@bma98/fractal-examples';
import { NativeNavigationBar, NativeNavigationBarRightView, NavigationBarButton } from '@bma98/fractal-navigation';

export default function App() {
    return (
        <ScreenStack style={{ flex: 1 }}>
            <Screen>
                <NativeNavigationBar title={'Examples'} goBack={() => {}}>
                    <NativeNavigationBarRightView>
                        <NavigationBarButton>Prueba</NavigationBarButton>
                    </NativeNavigationBarRightView>
                </NativeNavigationBar>
                <MainExample />
            </Screen>
        </ScreenStack>
    );
}
