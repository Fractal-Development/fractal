import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps,
    shouldForwardProp
} from '../../../../sharedProps';
import { PressableProps } from './types';

const StyledPressable = styled(motion.button as any).withConfig({
    shouldForwardProp
})`
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;

const Pressable = forwardRef(
    ({ currentVariant, animate, onPress, transition = { type: 'spring' }, ...others }: PressableProps, ref: any): JSX.Element => (
        <StyledPressable
            ref={ref}
            flexDirection='column'
            initial={currentVariant ?? 'from'}
            animate={currentVariant ?? animate}
            transition={transition}
            onClick={onPress}
            {...others}
        />
    )
);

Pressable.displayName = 'Pressable';

export { Pressable };
