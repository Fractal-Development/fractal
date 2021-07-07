import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps
} from '../../../sharedProps';
import { PressableProps } from './types';

const StyledPressable = styled(motion.button as any)`
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

const Pressable = forwardRef(({ from, onPress, transition = { type: 'spring' }, ...others }: PressableProps, ref: any): JSX.Element => {
    return <StyledPressable ref={ref} initial={from} transition={transition} onClick={onPress} {...others} />;
});

Pressable.displayName = 'Pressable';

export { Pressable };
