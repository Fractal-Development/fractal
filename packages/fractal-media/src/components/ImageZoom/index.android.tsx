import React, { useCallback, useRef, useState, memo } from 'react';
import { Animated, ScrollView, Dimensions, NativeScrollEvent, NativeSyntheticEvent, NativeMethods } from 'react-native';
import styled from 'styled-components/native';
import { useImageDimensions, usePanResponder } from '../../hooks';
import { getImageStyles, getImageTransform } from '../../utils';
import { ImageLoading } from './ImageLoading';
import { ImageZoomProps } from './ImageZoomProps';

const SWIPE_CLOSE_OFFSET = 75;
const SWIPE_CLOSE_VELOCITY = 1.75;
const SCREEN = Dimensions.get('window');
const SCREEN_WIDTH = SCREEN.width;
const SCREEN_HEIGHT = SCREEN.height;

const StyledScrollView = styled(ScrollView)`
    width: ${SCREEN_WIDTH}px;
    height: ${SCREEN_HEIGHT}px;
`;

const ImageZoom = memo(
    ({
        imageSrc,
        onZoom,
        onRequestClose,
        onLongPress,
        delayLongPress,
        swipeToCloseEnabled = false,
        doubleTapToZoomEnabled = true
    }: ImageZoomProps) => {
        const imageContainer = useRef<ScrollView & NativeMethods>(null);
        const imageDimensions = useImageDimensions(imageSrc);
        const [translate, scale] = getImageTransform(imageDimensions, SCREEN);
        const scrollValueY = new Animated.Value(0);
        const [isLoaded, setLoadEnd] = useState(false);

        const onLoaded = useCallback(() => setLoadEnd(true), []);
        const onZoomPerformed = useCallback(
            (isZoomed: boolean) => {
                onZoom(isZoomed);
                if (imageContainer?.current) {
                    imageContainer.current.setNativeProps({
                        scrollEnabled: !isZoomed
                    });
                }
            },
            [onZoom]
        );

        const onLongPressHandler = useCallback(() => {
            onLongPress(imageSrc);
        }, [imageSrc, onLongPress]);

        const [panHandlers, scaleValue, translateValue] = usePanResponder({
            initialScale: scale || 1,
            initialTranslate: translate || { x: 0, y: 0 },
            onZoom: onZoomPerformed,
            doubleTapToZoomEnabled,
            onLongPress: onLongPressHandler,
            delayLongPress
        });

        const imagesStyles = getImageStyles(imageDimensions, translateValue, scaleValue);
        const imageOpacity = scrollValueY.interpolate({
            inputRange: [-SWIPE_CLOSE_OFFSET, 0, SWIPE_CLOSE_OFFSET],
            outputRange: [0.7, 1, 0.7]
        });
        const imageStylesWithOpacity = { ...imagesStyles, opacity: imageOpacity };

        const onScrollEndDrag = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
            const velocityY = nativeEvent?.velocity?.y ?? 0;
            const offsetY = nativeEvent?.contentOffset?.y ?? 0;

            if ((Math.abs(velocityY) > SWIPE_CLOSE_VELOCITY && offsetY > SWIPE_CLOSE_OFFSET) || offsetY > SCREEN_HEIGHT / 2) {
                onRequestClose?.();
            }
        };

        const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
            const offsetY = nativeEvent?.contentOffset?.y ?? 0;

            scrollValueY.setValue(offsetY);
        };

        return (
            <StyledScrollView
                ref={imageContainer}
                pagingEnabled
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    height: SCREEN_HEIGHT * 2
                }}
                scrollEnabled={swipeToCloseEnabled}
                {...(swipeToCloseEnabled && {
                    onScroll,
                    onScrollEndDrag
                })}
            >
                <Animated.Image
                    {...panHandlers}
                    source={typeof imageSrc === 'string' ? { uri: imageSrc } : imageSrc}
                    style={imageStylesWithOpacity}
                    onLoad={onLoaded}
                />
                {(!isLoaded || !imageDimensions) && <ImageLoading />}
            </StyledScrollView>
        );
    }
);

ImageZoom.displayName = 'ImageZoom';

export { ImageZoom };
