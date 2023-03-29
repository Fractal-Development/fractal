import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, VirtualizedList } from 'react-native';
import { ImageSourcePropType, Layer } from '@fractal-software/fractal-ui';
import { ImageZoom } from '../ImageZoom';
import { useAnimatedComponents, useImageIndexChange } from '../../hooks';
import { ImageVieweProps } from './ImageVieweProps';

const DEFAULT_BG_COLOR = '#000';
const DEFAULT_DELAY_LONG_PRESS = 800;
const SCREEN = Dimensions.get('screen');
const SCREEN_WIDTH = SCREEN.width;

function ImageViewerBase({
    images,
    keyExtractor,
    imageIndex,
    onRequestClose,
    onLongPress = () => {},
    onImageIndexChange,
    backgroundColor = DEFAULT_BG_COLOR,
    swipeToCloseEnabled,
    doubleTapToZoomEnabled,
    delayLongPress = DEFAULT_DELAY_LONG_PRESS,
    header,
    footer
}: ImageVieweProps) {
    const imageList = useRef<VirtualizedList<ImageSourcePropType>>(null);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [currentImageIndex, onScroll] = useImageIndexChange(imageIndex, SCREEN);
    const [headerTransform, footerTransform, toggleBarsVisible] = useAnimatedComponents();

    useEffect(() => {
        if (onImageIndexChange) {
            onImageIndexChange(currentImageIndex);
        }
    }, [currentImageIndex, onImageIndexChange]);

    const onZoom = useCallback(
        (isScaled: boolean) => {
            setScrollEnabled(!isScaled);
            toggleBarsVisible(!isScaled);
        },
        [toggleBarsVisible]
    );

    return (
        <Layer flex={1} backgroundColor={backgroundColor}>
            {header != null ? (
                <Animated.View style={[styles.header, { transform: headerTransform }]}>
                    {header({ imageIndex: currentImageIndex })}
                </Animated.View>
            ) : null}
            <VirtualizedList
                ref={imageList}
                data={images}
                horizontal
                pagingEnabled
                windowSize={2}
                initialNumToRender={1}
                maxToRenderPerBatch={1}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                initialScrollIndex={imageIndex}
                getItem={(_, index) => images[index]}
                getItemCount={() => images.length}
                getItemLayout={(_, index) => ({
                    length: SCREEN_WIDTH,
                    offset: SCREEN_WIDTH * index,
                    index
                })}
                renderItem={({ item: imageSrc }) => (
                    <ImageZoom
                        onZoom={onZoom}
                        imageSrc={imageSrc}
                        onRequestClose={onRequestClose}
                        onLongPress={onLongPress}
                        delayLongPress={delayLongPress}
                        swipeToCloseEnabled={swipeToCloseEnabled}
                        doubleTapToZoomEnabled={doubleTapToZoomEnabled}
                    />
                )}
                onMomentumScrollEnd={onScroll}
                keyExtractor={(imageSrc, index) =>
                    keyExtractor ? keyExtractor(imageSrc, index) : typeof imageSrc === 'number' ? `${imageSrc}` : imageSrc
                }
                scrollEnabled={scrollEnabled}
            />
            {footer != null ? (
                <Animated.View style={[styles.footer, { transform: footerTransform }]}>
                    {footer({ imageIndex: currentImageIndex })}
                </Animated.View>
            ) : null}
        </Layer>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        top: 0
    },
    footer: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        bottom: 0
    }
});

const ImageViewer = (props: ImageVieweProps) => <ImageViewerBase key={props.imageIndex} {...props} />;

export { ImageViewer };
