import React, { useCallback, useRef, useState, memo } from 'react';

import { Animated, Dimensions, ScrollView, View, NativeScrollEvent, NativeSyntheticEvent, TouchableWithoutFeedback } from 'react-native';

import useDoubleTapToZoom from '../../hooks/useDoubleTapToZoom';
import useImageDimensions from '../../hooks/useImageDimensions';

import { getImageStyles, getImageTransform } from '../../utils';
import { ImageLoading } from './ImageLoading';
import styled from 'styled-components/native';
import { ImageSourcePropType } from '@fractal/fractal-ui';

const SWIPE_CLOSE_OFFSET = 75;
const SWIPE_CLOSE_VELOCITY = 1.55;
const SCREEN = Dimensions.get('screen');
const SCREEN_WIDTH = SCREEN.width;
const SCREEN_HEIGHT = SCREEN.height;

const StyledScrollView = styled(ScrollView)`
    width: ${SCREEN_WIDTH}px;
    height: ${SCREEN_HEIGHT}px;
`;

type Props = {
    imageSrc: ImageSourcePropType;
    onRequestClose: () => void;
    onZoom: (scaled: boolean) => void;
    onLongPress: (image: ImageSourcePropType) => void;
    delayLongPress: number;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
};

const ImageZoom = memo(
    ({
        imageSrc,
        onZoom,
        onRequestClose,
        onLongPress,
        delayLongPress,
        swipeToCloseEnabled = true,
        doubleTapToZoomEnabled = true
    }: Props) => {
        const scrollViewRef = useRef<ScrollView>(null);
        const [loaded, setLoaded] = useState(false);
        const [scaled, setScaled] = useState(false);
        const imageDimensions = useImageDimensions(imageSrc);
        const handleDoubleTap = useDoubleTapToZoom(scrollViewRef, scaled, SCREEN);

        const [translate, scale] = getImageTransform(imageDimensions, SCREEN);
        const scrollValueY = new Animated.Value(0);
        const scaleValue = new Animated.Value(scale || 1);
        const translateValue = new Animated.ValueXY(translate);
        const maxScale = scale && scale > 0 ? Math.max(1 / scale, 1) : 1;

        const imageOpacity = scrollValueY.interpolate({
            inputRange: [-SWIPE_CLOSE_OFFSET, 0, SWIPE_CLOSE_OFFSET],
            outputRange: [0.5, 1, 0.5]
        });
        const imagesStyles = getImageStyles(imageDimensions, translateValue, scaleValue);
        const imageStylesWithOpacity = { ...imagesStyles, opacity: imageOpacity };

        const onScrollEndDrag = useCallback(
            ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
                const velocityY = nativeEvent?.velocity?.y ?? 0;
                const scaled = nativeEvent?.zoomScale > 1;

                onZoom(scaled);
                setScaled(scaled);

                if (!scaled && swipeToCloseEnabled && Math.abs(velocityY) > SWIPE_CLOSE_VELOCITY) {
                    onRequestClose();
                }
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [scaled]
        );

        const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
            const offsetY = nativeEvent?.contentOffset?.y ?? 0;

            if (nativeEvent?.zoomScale > 1) {
                return;
            }

            scrollValueY.setValue(offsetY);
        };

        const onLongPressHandler = useCallback(() => {
            onLongPress(imageSrc);
        }, [imageSrc, onLongPress]);

        return (
            <View>
                <StyledScrollView
                    ref={scrollViewRef}
                    pinchGestureEnabled
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    maximumZoomScale={maxScale}
                    contentContainerStyle={{
                        height: SCREEN_HEIGHT
                    }}
                    scrollEnabled={swipeToCloseEnabled}
                    onScrollEndDrag={onScrollEndDrag}
                    scrollEventThrottle={1}
                    {...(swipeToCloseEnabled && {
                        onScroll
                    })}
                >
                    {(!loaded || !imageDimensions) && <ImageLoading />}
                    <TouchableWithoutFeedback
                        onPress={doubleTapToZoomEnabled ? handleDoubleTap : undefined}
                        onLongPress={onLongPressHandler}
                        delayLongPress={delayLongPress}
                    >
                        <Animated.Image
                            source={typeof imageSrc === 'string' ? { uri: imageSrc } : imageSrc}
                            style={imageStylesWithOpacity}
                            onLoad={() => setLoaded(true)}
                        />
                    </TouchableWithoutFeedback>
                </StyledScrollView>
            </View>
        );
    }
);

ImageZoom.displayName = 'ImageZoom';

export { ImageZoom };
