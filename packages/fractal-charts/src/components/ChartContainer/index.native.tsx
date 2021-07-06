import React, { useCallback, useEffect } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Layer } from '@bma98/fractal-ui';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnUI } from 'react-native-reanimated';
import { ChartContainerProps } from '../../types';

export function ChartContainer({
    style,
    contentStyle,
    onChangeDimensions,
    rotate,
    children,
    ...layerProps
}: ChartContainerProps): JSX.Element {
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }]
        };
    });

    const onLayout = useCallback(
        (event: LayoutChangeEvent) => {
            const {
                nativeEvent: {
                    layout: { height, width }
                }
            } = event;
            onChangeDimensions({ height, width });
        },
        [onChangeDimensions]
    );

    useEffect(() => {
        if (rotate) {
            runOnUI(() => {
                'worklet';
                rotation.value = withSpring(rotate, { damping: 12, stiffness: 90 });
            })();
        }
    }, [rotate, rotation]);

    return (
        <Layer style={style} {...layerProps}>
            <Animated.View style={[{ flex: 1, ...contentStyle }, animatedStyle]} onLayout={onLayout}>
                {children}
            </Animated.View>
        </Layer>
    );
}
