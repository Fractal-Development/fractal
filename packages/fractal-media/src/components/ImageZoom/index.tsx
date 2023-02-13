import React, { memo, useEffect, useRef, useState } from 'react';
import { HorizontalLayer, Image, ImageSourcePropType, Layer, SearchIcon, Text, TouchableOpacity, useTheme } from '@fractal/fractal-ui';
import { motion } from 'framer-motion';

type ImageZoomProps = {
    imageSrc: ImageSourcePropType;
    onRequestClose: () => void;
    onZoom: (scaled: boolean) => void;
    onLongPress?: (image: ImageSourcePropType) => void;
    delayLongPress: number;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
    containerWidth?: number;
    containerHeight?: number;
};

function round(number: number) {
    return Number(number.toFixed(1));
}

const ImageZoom = memo(({ imageSrc, doubleTapToZoomEnabled = true, containerWidth, containerHeight }: ImageZoomProps) => {
    const { colors, sizes } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerDimensions, setContainerDimensions] = useState({ width: 1, height: 2 });
    const constraintsRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
    const [scale, setScale] = useState<number>(1);
    const canDrag = scale > 1;
    const canZoom = scale < 3;

    const width = dimensions.width * scale;
    const height = dimensions.height * scale;

    useEffect(() => {
        if (containerRef.current != null) {
            const { current } = containerRef;
            const clientWidth = containerWidth ?? current.clientWidth;
            const clientHeight = containerHeight ?? current.clientHeight;
            setDimensions({ width: clientWidth, height: clientHeight });
            setContainerDimensions({ width: clientWidth, height: clientHeight });
        }
    }, [containerHeight, containerWidth]);

    const zoomIn = () => {
        if (canZoom) {
            setScale((currentScale) => {
                return round(currentScale + 0.4);
            });
        }
    };

    const zoomOut = () => {
        setScale((currentScale) => {
            return round(currentScale - 0.4);
        });
    };

    return (
        <Layer ref={containerRef} flex={1}>
            <Layer ref={constraintsRef} height={containerDimensions.height} width={containerDimensions.width} overflow='hidden'>
                <motion.div
                    animate={!canDrag ? { y: 0, x: 0 } : undefined}
                    drag={canDrag}
                    dragConstraints={constraintsRef}
                    onDoubleClick={doubleTapToZoomEnabled ? zoomIn : undefined}
                    whileDrag={{
                        cursor: 'move'
                    }}
                    style={{
                        height,
                        width
                    }}
                >
                    <Image height={height} width={width} source={imageSrc} resizeMode='contain' />
                </motion.div>
            </Layer>
            <HorizontalLayer position='absolute' right={0} bottom={10} left={0} alignItems='center' justifyContent='center'>
                <TouchableOpacity
                    width={sizes.interactiveItemHeight}
                    height={sizes.interactiveItemHeight}
                    backgroundColor='#00000077'
                    alignItems='center'
                    justifyContent='center'
                    onPress={zoomOut}
                    disabled={!canDrag}
                >
                    <Text fontSize={22} color={colors.white}>
                        -
                    </Text>
                </TouchableOpacity>
                <Layer
                    width={sizes.interactiveItemHeight}
                    height={sizes.interactiveItemHeight}
                    backgroundColor='#00000077'
                    alignItems='center'
                    justifyContent='center'
                >
                    <SearchIcon fill={colors.white} width={20} height={20} />
                </Layer>
                <TouchableOpacity
                    width={sizes.interactiveItemHeight}
                    height={sizes.interactiveItemHeight}
                    alignItems='center'
                    justifyContent='center'
                    backgroundColor='#00000077'
                    onPress={zoomIn}
                    disabled={!canZoom}
                >
                    <Text fontSize={22} color={colors.white}>
                        +
                    </Text>
                </TouchableOpacity>
            </HorizontalLayer>
        </Layer>
    );
});

ImageZoom.displayName = 'ImageZoom';

export { ImageZoom };
