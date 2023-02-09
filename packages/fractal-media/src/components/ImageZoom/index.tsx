import React, { memo, useEffect, useRef, useState } from 'react';
import { HorizontalLayer, Image, ImageSourcePropType, Layer, SearchIcon, Text, TouchableOpacity, useTheme } from '@fractal/fractal-ui';
import { motion } from 'framer-motion';

type ImageZoomProps = {
    imageSrc: ImageSourcePropType;
    onRequestClose: () => void;
    onZoom: (scaled: boolean) => void;
    onLongPress: (image: ImageSourcePropType) => void;
    delayLongPress: number;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
};

const ImageZoom = memo(({ imageSrc }: ImageZoomProps) => {
    const { colors, sizes } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const constraintsRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
    const [scale, setScale] = useState<number>(1);
    const canDrag = scale > 1;
    const canZoom = scale < 3;

    const width = dimensions.width * scale;
    const height = dimensions.height * scale;

    useEffect(() => {
        if (containerRef.current != null) {
            const {
                current: { clientWidth, clientHeight }
            } = containerRef;
            setDimensions({ width: clientWidth, height: clientHeight });
        }
    }, []);

    const zoomIn = () => {
        setScale((currentScale) => {
            return Math.round(currentScale + 0.4);
        });
    };

    const zoomOut = () => {
        setScale((currentScale) => {
            return Math.round(currentScale - 0.4);
        });
    };

    return (
        <Layer ref={containerRef} flex={1}>
            <Layer
                ref={constraintsRef}
                height={containerRef.current?.clientHeight}
                width={containerRef.current?.clientWidth}
                overflow='hidden'
            >
                <motion.div
                    animate={!canDrag ? { y: 0, x: 0 } : undefined}
                    drag={canDrag}
                    dragConstraints={constraintsRef}
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
