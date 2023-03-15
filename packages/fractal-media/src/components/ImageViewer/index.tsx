import React, { useRef, useState } from 'react';
import { AnimatePresence, Layer, TouchableOpacity } from '@fractal/fractal-ui';
import { motion } from 'framer-motion';
import { ImageZoom } from '../ImageZoom';
import { ChevronLeft, ChevronRight } from '../../assets';
import { ImageVieweProps } from './ImageVieweProps';

const DEFAULT_DELAY_LONG_PRESS = 800;

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

export function ImageViewer({
    images,
    imageIndex,
    onImageIndexChange,
    onRequestClose,
    onLongPress = () => {},
    backgroundColor = '#000',
    swipeToCloseEnabled,
    doubleTapToZoomEnabled,
    delayLongPress = DEFAULT_DELAY_LONG_PRESS,
    header,
    footer
}: ImageVieweProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(imageIndex);
    const [direction, setDirection] = useState<1 | -1>(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const hideLeft = currentImageIndex === 0;
    const hideRight = currentImageIndex === images.length - 1;

    const paginate = (newDirection: 1 | -1) => {
        const newImageIndex = currentImageIndex + newDirection;
        if (newImageIndex >= 0 && newImageIndex < images.length) {
            const newImageIndex = currentImageIndex + newDirection;
            setCurrentImageIndex(newImageIndex);
            onImageIndexChange?.(newImageIndex);
            setDirection(newDirection);
        }
    };

    return (
        <Layer flex={1} backgroundColor={backgroundColor}>
            <Layer ref={containerRef} flex={1}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentImageIndex}
                        custom={direction}
                        variants={variants}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        style={{
                            flex: '1 1 0%',
                            display: 'flex',
                            position: 'absolute',
                            maxWidth: '100vw',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }}
                    >
                        <ImageZoom
                            onZoom={() => {}}
                            imageSrc={images[currentImageIndex]}
                            onRequestClose={onRequestClose}
                            onLongPress={onLongPress}
                            delayLongPress={delayLongPress}
                            swipeToCloseEnabled={swipeToCloseEnabled}
                            doubleTapToZoomEnabled={doubleTapToZoomEnabled}
                            containerWidth={containerRef.current?.clientWidth}
                            containerHeight={containerRef.current?.clientHeight}
                        />
                    </motion.div>
                </AnimatePresence>
                {header != null ? (
                    <Layer zIndex={2} position='absolute' top={0} right={0} left={0}>
                        {header({ imageIndex: currentImageIndex })}
                    </Layer>
                ) : null}
                {footer != null ? (
                    <Layer zIndex={2} position='absolute' bottom={0} right={0} left={0}>
                        {footer({ imageIndex: currentImageIndex })}
                    </Layer>
                ) : null}
                {hideLeft ? null : (
                    <TouchableOpacity
                        position='absolute'
                        left={10}
                        backgroundColor='white'
                        justifyContent='center'
                        alignItems='center'
                        height={40}
                        width={40}
                        borderRadius={20}
                        style={{ top: 'calc(50% - 20px)' }}
                        zIndex={2}
                        onPress={() => {
                            paginate(-1);
                        }}
                    >
                        <ChevronLeft fill='black' width={24} height={24} />
                    </TouchableOpacity>
                )}
                {hideRight ? null : (
                    <TouchableOpacity
                        position='absolute'
                        right={10}
                        backgroundColor='white'
                        justifyContent='center'
                        alignItems='center'
                        height={40}
                        width={40}
                        borderRadius={20}
                        style={{ top: 'calc(50% - 20px)' }}
                        zIndex={2}
                        onPress={() => {
                            paginate(1);
                        }}
                    >
                        <ChevronRight fill='black' width={24} height={24} />
                    </TouchableOpacity>
                )}
            </Layer>
        </Layer>
    );
}
