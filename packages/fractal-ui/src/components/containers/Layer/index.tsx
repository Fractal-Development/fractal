import React, { forwardRef, FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps,
    WebAnimationProps
} from '../../../sharedProps';
import { LayerProps } from './types';

const StyledLayer = styled(motion.div as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
` as FunctionComponent<WebAnimationProps>;

const Layer = forwardRef(
    ({ from, currentVariant, animate, transition = { type: 'spring' }, ...others }: LayerProps, ref: any): JSX.Element => {
        return (
            <StyledLayer
                ref={ref}
                initial={currentVariant ? 'from' : from}
                animate={currentVariant ?? animate}
                transition={transition}
                {...others}
            />
        );
    }
);

Layer.displayName = 'Layer';

export { Layer };
