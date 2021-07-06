import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ActivityIndicatorCircleProps, ActivityIndicatorProps } from './types';
import { Layer } from '../containers/Layer';
import { FractalTransition } from '../../sharedProps';
import { getActivityIndicatorAccessibilityProps } from './accessibility/getActivityIndicatorAccessibilityProps';

const BackgroundCircle = styled(motion.circle)`
    stroke: ${({ color }: ActivityIndicatorCircleProps) => color};
    opacity: 0.2;
`;

const AnimatedSection = styled(motion.circle)`
    stroke: ${({ color }: ActivityIndicatorCircleProps) => color};
    stroke-dasharray: 80;
    stroke-dashoffset: 60;
`;

const transition: FractalTransition = { repeat: Infinity, type: 'ease', duration: 0.75 };

const animate = {
    rotate: 360
};

const ActivityIndicator = forwardRef(({ color, ...others }: ActivityIndicatorProps, ref: any): JSX.Element => {
    return (
        <Layer ref={ref} animate={animate} transition={transition} {...others}>
            <motion.svg height='100%' width='100%' viewBox='0 0 32 32'>
                <BackgroundCircle
                    cx='16'
                    cy='16'
                    fill='none'
                    r='14'
                    strokeWidth='4'
                    color={color}
                    {...getActivityIndicatorAccessibilityProps()}
                />
                <AnimatedSection cx='16' cy='16' fill='none' r='14' strokeWidth='4' color={color} />
            </motion.svg>
        </Layer>
    );
});

ActivityIndicator.displayName = 'ActivityIndicator';

export { ActivityIndicator };
