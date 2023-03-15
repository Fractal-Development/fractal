import React, { memo, MouseEvent, useEffect, useRef, useState } from 'react';
import { HorizontalLayer, Image, Layer, SearchIcon, Text, TouchableOpacity, useTheme } from '@fractal/fractal-ui';
import { motion, useAnimationControls } from 'framer-motion';
import { ImageZoomProps } from './ImageZoomProps';

function round(number: number) {
    return Number(number.toFixed(1));
}

const ImageZoom = memo(({ imageSrc, doubleTapToZoomEnabled = true, containerWidth, containerHeight }: ImageZoomProps) => {
    const { colors, sizes, spacings } = useTheme();
    const controls = useAnimationControls();
    const containerRef = useRef<HTMLDivElement>(null);
    const [flexStyles, setFlexStyles] = useState<{ [key: string]: string } | undefined>({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });
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

    const zoomIn = (event?: MouseEvent<HTMLDivElement>) => {
        const newScale = round(scale + 0.4);
        if (event != null) {
            const { clientX, clientY } = event;
            const x = (clientX / 2) * newScale;
            const y = (clientY / 2) * newScale;
            controls.start({ x: -x, y: -y });
            setFlexStyles(undefined);
        } else {
            setFlexStyles({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            });
        }
        if (canZoom) {
            setScale(newScale);
        }
    };

    const zoomOut = () => {
        setScale((currentScale) => {
            return round(currentScale - 0.4);
        });
    };

    useEffect(() => {
        if (!canDrag) {
            controls.start({ x: 0, y: 0 });
        }
    }, [canDrag, controls]);

    return (
        <Layer ref={containerRef} flex={1}>
            <motion.div
                ref={constraintsRef}
                onDoubleClick={doubleTapToZoomEnabled ? zoomIn : undefined}
                style={{
                    height: containerDimensions.height,
                    width: containerDimensions.width,
                    overflow: 'hidden',
                    ...flexStyles
                }}
            >
                <motion.div
                    animate={controls}
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
            </motion.div>
            <HorizontalLayer position='absolute' right={0} bottom={10} left={0} alignItems='center' justifyContent='center'>
                <TouchableOpacity
                    width={sizes.interactiveItemHeight}
                    height={sizes.interactiveItemHeight}
                    backgroundColor='#00000077'
                    alignItems='center'
                    justifyContent='center'
                    onPress={zoomOut}
                    disabled={!canDrag}
                    borderTopLeftRadius={spacings.xs}
                    borderBottomLeftRadius={spacings.xs}
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
                    borderTopRightRadius={spacings.xs}
                    borderBottomRightRadius={spacings.xs}
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
