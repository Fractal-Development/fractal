import React, { memo, ReactElement, useEffect, useState } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ResponsiveSideTabBar, TabBarInsetsLayer } from '@bma98/fractal-navigation';
import {
    NavigationRouter,
    SimpleTabBarItemLink,
    TabNavigator,
    TabScreen,
    StackNavigator,
    StackScreen,
    NavigationBarConfig,
    useNavigate,
    useLocation
} from '@bma98/fractal-navigation-router';
import { FractalAppRoot, Layer, Pressable, Text } from '@bma98/fractal-ui';

export const routes = {
    root: '/*',
    components: '/components',
    componentsDetails: '/components/details',
    test: '/test'
};

const ReactIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 30 30' width={30} height={30} {...props}>
            <Path d='M10.68 4.182c-.611 0-1.178.136-1.68.425-1.569.906-2.166 3.114-1.85 5.862C4.613 11.569 3 13.189 3 15c0 1.811 1.613 3.431 4.15 4.531-.316 2.748.281 4.956 1.85 5.862.501.289 1.068.425 1.68.425 1.302 0 2.808-.653 4.32-1.775 1.512 1.122 3.02 1.775 4.322 1.775.611 0 1.178-.136 1.68-.425 1.569-.906 2.166-3.114 1.85-5.862C25.388 18.431 27 16.811 27 15c0-1.811-1.613-3.431-4.15-4.531.316-2.748-.281-4.956-1.85-5.862-.501-.29-1.068-.425-1.68-.425-1.302 0-2.808.653-4.32 1.775-1.512-1.122-3.018-1.775-4.32-1.775zm0 1.75c.781 0 1.815.415 2.937 1.185-.66.623-1.306 1.33-1.928 2.12-1.008.144-1.959.355-2.84.618-.004-.06-.015-.125-.019-.185-.107-1.78.284-3.107 1.045-3.547.225-.13.488-.191.805-.191zm8.64 0c.316 0 .58.061.805.191.761.439 1.152 1.767 1.045 3.547-.004.06-.015.124-.02.185a19.621 19.621 0 00-2.841-.619 19.588 19.588 0 00-1.926-2.119c1.122-.77 2.156-1.185 2.937-1.185zM15 8.229c.271.246.54.507.813.792C15.543 9.012 15.274 9 15 9c-.274 0-.541.012-.81.021.271-.285.54-.546.81-.792zm0 2.521c.829 0 1.614.046 2.36.127.454.618.902 1.27 1.322 1.998.402.697.758 1.41 1.072 2.125-.314.715-.67 1.43-1.072 2.127a21.394 21.394 0 01-1.319 1.99c-.771.085-1.563.133-2.363.133-.829 0-1.614-.046-2.36-.127a21.404 21.404 0 01-1.322-1.996A21.762 21.762 0 0110.246 15c.314-.715.67-1.428 1.072-2.125.42-.725.866-1.376 1.319-1.992A21.758 21.758 0 0115 10.75zm4.746.541c.397.096.778.2 1.137.314-.081.368-.18.742-.293 1.12-.129-.242-.254-.484-.393-.725-.143-.248-.302-.47-.45-.709zm-9.494.002c-.149.238-.307.46-.45.707-.138.24-.263.483-.392.725a16.291 16.291 0 01-.295-1.121c.365-.116.746-.218 1.137-.311zm-2.783.953c.21.89.503 1.812.879 2.752a19.618 19.618 0 00-.877 2.746C5.729 16.904 4.75 15.856 4.75 15c0-.879.952-1.88 2.547-2.678.054-.027.116-.05.172-.076zm15.06.01c1.742.84 2.721 1.888 2.721 2.744 0 .879-.952 1.88-2.547 2.678-.054.027-.116.05-.172.076-.21-.89-.5-1.813-.877-2.754.375-.937.665-1.857.875-2.744zM15 13a2 2 0 10-.001 3.999A2 2 0 0015 13zm-5.59 4.275c.129.242.256.484.395.725.143.248.3.47.449.709-.397-.096-.778-.2-1.137-.314.081-.368.18-.741.293-1.12zm11.18.002c.112.379.214.752.295 1.12-.365.115-.746.217-1.137.31.149-.238.307-.46.45-.707.138-.24.263-.482.392-.723zM8.85 20.145c.88.263 1.832.474 2.841.619a19.587 19.587 0 001.926 2.12c-1.122.77-2.156 1.186-2.937 1.186a1.57 1.57 0 01-.805-.193c-.761-.439-1.152-1.765-1.045-3.545.004-.061.015-.126.02-.187zm12.3 0c.005.061.016.126.02.187.107 1.78-.284 3.105-1.045 3.545-.225.13-.488.193-.805.193-.781 0-1.815-.415-2.937-1.185a19.602 19.602 0 001.928-2.121 19.619 19.619 0 002.84-.62zm-6.962.834c.27.009.538.021.812.021s.543-.012.813-.021c-.273.285-.542.546-.813.792-.271-.246-.54-.507-.813-.792z' />
        </Svg>
    )
);

function renderReactIcon(color: string, size: number) {
    return <ReactIcon />;
}

function MainTabBar(): ReactElement {
    return (
        <ResponsiveSideTabBar>
            <SimpleTabBarItemLink path={routes.components} title='Components'>
                {renderReactIcon}
            </SimpleTabBarItemLink>
            <SimpleTabBarItemLink path={routes.test} title='Test'>
                {renderReactIcon}
            </SimpleTabBarItemLink>
        </ResponsiveSideTabBar>
    );
}

function FirstScreen() {
    const navigate = useNavigate();
    return (
        <Layer flex={1} justifyContent='center' alignItems='center'>
            <Pressable
                onPress={() => {
                    navigate(routes.componentsDetails);
                }}
            >
                <Text>Welcome to Fractal UI Components</Text>
            </Pressable>
        </Layer>
    );
}

function SecondScreen() {
    return (
        <Layer flex={1} justifyContent='center' alignItems='center'>
            <Text>Details Screen</Text>
        </Layer>
    );
}

function Tests() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('mount Tests');
    }, []);

    return (
        <TabBarInsetsLayer>
            <Layer flex={1} justifyContent='center' alignItems='center'>
                <Pressable
                    onPress={() => {
                        setCounter((x) => x + 1);
                    }}
                >
                    <Text>Welcome to tests {counter}</Text>
                </Pressable>
            </Layer>
        </TabBarInsetsLayer>
    );
}

function LocationShare() {
    const location = useLocation();
    console.log(location.pathname);
    return <></>;
}

export default function App() {
    return (
        <FractalAppRoot>
            <NavigationRouter>
                <TabNavigator path={routes.root} initialTabPath={routes.components} tabBar={<MainTabBar />}>
                    <TabScreen path={routes.components}>
                        <TabBarInsetsLayer>
                            <LocationShare />
                            <StackNavigator path={routes.components}>
                                <StackScreen path={routes.components} navBarConfig={<NavigationBarConfig title={'title'} />}>
                                    <FirstScreen />
                                </StackScreen>
                                <StackScreen path={routes.componentsDetails} navBarConfig={<NavigationBarConfig title={'details'} />}>
                                    <SecondScreen />
                                </StackScreen>
                            </StackNavigator>
                        </TabBarInsetsLayer>
                    </TabScreen>
                    <TabScreen path={routes.test}>
                        <Tests />
                    </TabScreen>
                </TabNavigator>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
