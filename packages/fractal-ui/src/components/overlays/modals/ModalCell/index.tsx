import { useValueForLargeSizeType } from '@fractal-software/size-class';
import React from 'react';

import { LayerProps } from '../../../layout/Layer/types';
import { BottomCellDesktop, BottomCellPhone } from './Bottom';
import { MiddleCellDesktop, MiddleCellPhone } from './Middle';

export interface ModalCellProps extends LayerProps {
    variant: 'bottom' | 'middle';
}

export function ModalCell({ variant, ...others }: ModalCellProps): JSX.Element {
    const DesktopComponent = variant === 'bottom' ? BottomCellDesktop : MiddleCellDesktop;
    const CellPhoneComponent = variant === 'bottom' ? BottomCellPhone : MiddleCellPhone;
    const Wrapper = useValueForLargeSizeType('width', DesktopComponent, CellPhoneComponent);
    return <Wrapper {...others} />;
}
