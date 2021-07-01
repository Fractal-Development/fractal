import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
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
` as typeof motion.button;

const Pressable = forwardRef(({ onPress, transition = { type: 'spring' }, ...others }: PressableProps, ref: any): JSX.Element => {
    return <StyledPressable ref={ref} transition={transition} onClick={onPress} {...others} />;
});

Pressable.displayName = 'Pressable';

export { Pressable };
