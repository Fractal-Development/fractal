import React, { forwardRef } from 'react';

import { Layer } from '../../layout';
import { Image } from '../Image';
import { ImageBackgroundProps } from './types';

const ImageBackground = forwardRef(
    ({ children, resizeMode, source, width, height, ...others }: ImageBackgroundProps, ref: any): JSX.Element => (
        <Layer ref={ref} position='relative' overflow='hidden' width={width} height={height} {...others}>
            <Image width={width} height={height} resizeMode={resizeMode} source={source} position='absolute' label='Background' />
            <Layer zIndex={1}>{children}</Layer>
        </Layer>
    )
);

ImageBackground.displayName = 'ImageBackground';

export { ImageBackground };
