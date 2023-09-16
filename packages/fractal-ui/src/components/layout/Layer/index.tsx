import React from 'react';
import { motion } from 'framer-motion';
import { LayerProps } from './types';
import { clsx } from 'clsx';

const Layer = ({
    from,
    currentVariant,
    animate,
    transition = { type: 'spring' },
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onLayout: _onLayout,
    className
}: LayerProps): JSX.Element => {
    return (
        <motion.div
            className={clsx(
                'focus:outline-initial focus:outline-initial flex shrink-0 focus:outline-none',
                !className?.includes('flex-row') && 'flex-col',
                !className?.includes('shrink') && 'shrink-0',
                !className?.includes('absolute') && 'relative',
                className
            )}
            initial={(currentVariant ? 'from' : from) as any}
            animate={(currentVariant ?? animate) as any}
            transition={transition}
        >
            {children}
        </motion.div>
    );
};

export { Layer };
