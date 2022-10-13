import { motion, Transition } from 'framer-motion';
import React, { forwardRef } from 'react';

import { Layer } from '../../layout/Layer';
import { getActivityIndicatorAccessibilityProps } from './accessibility/getActivityIndicatorAccessibilityProps';
import { ActivityIndicatorProps } from './types';

const transition: Transition = { repeat: Infinity, type: 'ease', duration: 0.75 };

const animate = {
    rotate: 360
};

const ActivityIndicator = forwardRef(
    ({ color, ...others }: ActivityIndicatorProps, ref: any): JSX.Element => (
        <Layer ref={ref} animate={animate} transition={transition} width={32} height={32} {...others}>
            <motion.svg height='100%' width='100%' viewBox='0 0 32 32'>
                <motion.circle
                    cx='16'
                    cy='16'
                    fill='none'
                    r='14'
                    strokeWidth='4'
                    stroke={color}
                    opacity={0.2}
                    {...getActivityIndicatorAccessibilityProps()}
                />
                <motion.circle
                    cx='16'
                    cy='16'
                    fill='none'
                    r='14'
                    strokeWidth='4'
                    stroke={color}
                    strokeDasharray={80}
                    strokeDashoffset={60}
                />
            </motion.svg>
        </Layer>
    )
);

ActivityIndicator.displayName = 'ActivityIndicator';

export { ActivityIndicator };
