import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TextProps } from './types';
import { motion } from 'framer-motion';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractTextProps,
    extractWebProps
} from '../../../sharedProps';

const StyledText = styled(motion.span as any)`
    user-select: ${({ selectable }: TextProps) => (selectable ? 'auto' : 'none')};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
    ${extractTextProps};
`;

const BaseText = forwardRef(({ from, currentVariant, animate, ...others }: Omit<TextProps, 'variant'>, ref: any): JSX.Element => {
    return <StyledText ref={ref} initial={currentVariant ? 'from' : from} animate={currentVariant ?? animate} {...others} />;
});

BaseText.displayName = 'BaseText';

export { BaseText };
