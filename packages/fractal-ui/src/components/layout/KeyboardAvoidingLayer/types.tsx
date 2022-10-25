import { ReactNode, RefObject } from 'react';

import { FractalSharedStyleProps } from '../../../sharedProps';

export interface KeyboardAvoidingLayerProps extends FractalSharedStyleProps {
    children?: ReactNode | ReactNode[];
    style?: any;
    onLayout?: (event: any) => void;
    ref?: RefObject<any>;
    keyboardVerticalOffset?: number;
    behavior?: 'padding' | 'height' | 'position';
}
