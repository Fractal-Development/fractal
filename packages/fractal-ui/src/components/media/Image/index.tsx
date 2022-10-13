import React, { forwardRef, useCallback } from 'react';

import { Layer } from '../../layout';
import { ResizableImage } from './ResizableImage';
import { getImageAccessibilityProps } from './accessibility/getImageAccessibilityProps';
import { ImageProps } from './types';

const Image = forwardRef(({ label, source, resizeMode, width, height, ...others }: ImageProps, ref: any): JSX.Element => {
    const getBackgroundSize = useCallback((): string | undefined => {
        if ((resizeMode === 'center' || resizeMode === 'repeat') && width != null && height != null) {
            if (typeof width === 'string') {
                return `${width} ${height}`;
            }
            return width < height ? `${width}px` : `${height}px`;
        }
        return undefined;
    }, [height, resizeMode, width]);

    return (
        <Layer
            ref={ref}
            flexBasis='auto'
            overflow='hidden'
            zIndex={0}
            display='flex'
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
