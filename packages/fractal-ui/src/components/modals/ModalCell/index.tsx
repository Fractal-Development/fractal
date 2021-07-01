import React from 'react';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { LayerProps } from '../../containers/Layer/types';
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
