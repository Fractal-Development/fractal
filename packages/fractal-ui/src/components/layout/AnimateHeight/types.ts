import { ReactNode } from 'react';
import { Transition } from 'framer-motion';

export type AnimateHeightProps = {
    children?: ReactNode;
    hide?: boolean;
    transition?: Transition;
    initialHeight?: number;
    style?: any;
    delay?: number;
};
