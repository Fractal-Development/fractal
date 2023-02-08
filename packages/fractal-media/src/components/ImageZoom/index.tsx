import React, { memo, useEffect, useRef, useState } from 'react';
import { Button, HorizontalLayer, Image, ImageSourcePropType, Layer } from '@fractal/fractal-ui';
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
    const containerRef = useRef<HTMLDivElement>(null);
    const constraintsRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
    const [scale, setScale] = useState<number>(1);
    const canDrag = scale > 1;

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
            return currentScale - 0.4;
        });
    };

    const zoomOut = () => {
        setScale((currentScale) => {
            return currentScale + 0.4;
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
                    onDoubleClick={zoomIn}
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
                <Button text='-' onPress={zoomIn} disabled={!canDrag} />
                <Button text='+' onPress={zoomOut} />
            </HorizontalLayer>
        </Layer>
    );
});

ImageZoom.displayName = 'ImageZoom';

export { ImageZoom };
