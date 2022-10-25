import { ReactNode } from 'react';

import { LayerProps } from '../../layout';

export interface ChipProps extends LayerProps {
    text?: string;
    children?: ReactNode;
    onCrossButtonPress?: () => void;
}
