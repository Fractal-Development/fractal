import React from 'react';
import { motion } from 'framer-motion';
import { AnimateHeightProps } from './types';

export function AnimateHeight({ children, hide = false, style, transition, initialHeight = 0 }: AnimateHeightProps) {
    return (
        <motion.div
            layout
            transition={transition}
            style={{ ...(initialHeight > 0 && { height: initialHeight }), ...style, ...(hide && { height: 0 }) }}
        >
            {children}
        </motion.div>
    );
}
