import { ReactNode, RefObject } from 'react';

import { AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';

export interface LayerProps extends FractalSharedStyleProps, AnimationProps {
    children?: ReactNode | ReactNode[];
    style?: any;
    onLayout?: (event: any) => void;
    ref?: RefObject<any>;
    layout?: boolean | 'position' | 'size';
}
