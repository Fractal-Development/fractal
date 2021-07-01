import React, { forwardRef, useCallback } from 'react';
import { ImageProps } from './types';
import { ResizableImage } from './ResizableImage';
import { Layer } from '../containers/Layer';
import { getImageAccessibilityProps } from './accessibility/getImageAccessibilityProps';

const Image = forwardRef(({ label, source, resizeMode, width, height, ...others }: ImageProps, ref: any): JSX.Element => {
    const getBackgroundSize = useCallback((): string | undefined => {
        if ((resizeMode == 'center' || resizeMode == 'repeat') && width != null && height != null) {
            if (typeof width == 'string') {
                return `${width} ${height}`;
            }
            return width < height ? `${width}px` : `${height}px`;
        }
        return undefined;
    }, [height, resizeMode, width]);

    return (
        <Layer
            ref={ref}
            flexBasis={'auto'}
            overflow={'hidden'}
            zIndex={0}
            display={'flex'}
            width={width}
            height={height}
            {...others}
            {...getImageAccessibilityProps(label)}
        >
            <ResizableImage source={source} resizeMode={resizeMode} backgroundSize={getBackgroundSize()} />
        </Layer>
    );
});

Image.displayName = 'Image';

export { Image };
