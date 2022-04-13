import { ReactNode, RefObject } from 'react';
import { AnimationProps } from '../../../sharedProps';
import { SharedStylesProps } from '../../../sharedProps/SharedStyles';
export interface LayerProps extends SharedStylesProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onLayout?: (event: any) => void;
    ref?: RefObject<any>;
}
