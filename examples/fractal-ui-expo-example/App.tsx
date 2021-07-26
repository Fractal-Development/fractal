import React from 'react';
import { Screen, ScreenStack } from 'react-native-screens';
import { MainExample } from '@bma98/fractal-examples';
import {
    NativeNavigationBar,
    NativeNavigationBarRightView,
    NavigationBarButton,
    TabBar,
    TabBarContextProvider,
    NavigationLayer
} from '@bma98/fractal-navigation';
import { Layer } from '@bma98/fractal-ui';

export default function App() {
    return (
        <Layer height={'100vh'}>
            <TabBarContextProvider>
                <ScreenStack style={{ flex: 1 }}>
                    <Screen>
                        <NativeNavigationBar title={'Examples'} goBack={() => {}}>
                            <NativeNavigationBarRightView>
                                <NavigationBarButton>Prueba</NavigationBarButton>
                            </NativeNavigationBarRightView>
                        </NativeNavigationBar>
                        <NavigationLayer>
                            <MainExample />
                        </NavigationLayer>
                    </Screen>
                </ScreenStack>
                <TabBar tabBarPosition={'bottom'} />
            </TabBarContextProvider>
        </Layer>
    );
}
