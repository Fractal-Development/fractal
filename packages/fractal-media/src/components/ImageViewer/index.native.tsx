import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, VirtualizedList } from 'react-native';
import { ImageSourcePropType, Layer } from '@fractal/fractal-ui';
import { ImageZoom } from '..';
import useAnimatedComponents from '../../hooks/useAnimatedComponents';
import useImageIndexChange from '../../hooks/useImageIndexChange';
import useRequestClose from '../../hooks/useRequestClose';
import { ImageDefaultHeader } from './ImageDefaultHeader';

type Props = {
    images: ImageSourcePropType[];
    keyExtractor?: (imageSrc: ImageSourcePropType, index: number) => string;
    imageIndex: number;
    onRequestClose: () => void;
    onLongPress?: (image: ImageSourcePropType) => void;
    onImageIndexChange?: (imageIndex: number) => void;
    backgroundColor?: string;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
    delayLongPress?: number;
    header?: (props: { imageIndex: number }) => JSX.Element;
    footer?: (props: { imageIndex: number }) => JSX.Element;
};

const DEFAULT_BG_COLOR = '#000';
const DEFAULT_DELAY_LONG_PRESS = 800;
const SCREEN = Dimensions.get('screen');
const SCREEN_WIDTH = SCREEN.width;

function ImageViewing({
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
}: Props) {
    const imageList = useRef<VirtualizedList<ImageSourcePropType>>(null);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [opacity, onRequestCloseEnhanced] = useRequestClose(onRequestClose);
    const [currentImageIndex, onScroll] = useImageIndexChange(imageIndex, SCREEN);
    const [headerTransform, footerTransform, toggleBarsVisible] = useAnimatedComponents();

    useEffect(() => {
        if (onImageIndexChange) {
            onImageIndexChange(currentImageIndex);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentImageIndex]);

    const onZoom = useCallback(
        (isScaled: boolean) => {
            setScrollEnabled(!isScaled);
            toggleBarsVisible(!isScaled);
        },
        [toggleBarsVisible]
    );

    return (
        <Layer flex={1} backgroundColor={backgroundColor} opacity={opacity}>
            <Animated.View style={[styles.header, { transform: headerTransform }]}>
                {header != null ? (
                    header({ imageIndex: currentImageIndex })
                ) : (
                    <ImageDefaultHeader onRequestClose={onRequestCloseEnhanced} />
                )}
            </Animated.View>
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
                        onRequestClose={onRequestCloseEnhanced}
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
            {footer != null && (
                <Animated.View style={[styles.footer, { transform: footerTransform }]}>
                    {footer({ imageIndex: currentImageIndex })}
                </Animated.View>
            )}
        </Layer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
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

const EnhancedImageViewing = (props: Props) => <ImageViewing key={props.imageIndex} {...props} />;

export { EnhancedImageViewing };
