import { useEffect, useCallback, useState } from 'react';
import { withTiming, useSharedValue, useAnimatedStyle, Easing } from 'react-native-reanimated';
export function useSegmentManager(numberOfValues, selectedIndex, tintColor) {
    const [segmentWidth, setSegmentWidth] = useState(0);
    const translateX = useSharedValue(0);
    const handleLayout = useCallback(({ nativeEvent: { layout: { width } } }) => {
        const newSegmentWidth = numberOfValues ? width / numberOfValues : 0;
        if (newSegmentWidth !== segmentWidth) {
            translateX.value = newSegmentWidth * (selectedIndex || 0);
            setSegmentWidth(newSegmentWidth);
        }
    }, [numberOfValues, segmentWidth, selectedIndex, translateX]);
    useEffect(() => {
        if (translateX && segmentWidth) {
            translateX.value = withTiming(segmentWidth * selectedIndex, { duration: 300, easing: Easing.out(Easing.quad) });
        }
    }, [segmentWidth, selectedIndex, translateX]);
    const sliderStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
        width: segmentWidth - 4,
        backgroundColor: tintColor
    }));
    return { segmentWidth, handleLayout, sliderStyle };
}
//# sourceMappingURL=useSegmentManager.js.map