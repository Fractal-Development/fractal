import React from 'react';
import { HorizontalLayer } from '../../../containers/HorizontalLayer';
import { TouchableOpacity } from '../../../buttons/TouchableOpacity';
import { BaseRadioButtonProps } from '../../types';
import { RadioControl } from '../RadioControl';

export function BaseRadioButton({ label, onPress, active }: BaseRadioButtonProps): JSX.Element {
    return (
        <TouchableOpacity onPress={onPress}>
            <HorizontalLayer alignItems='center'>
                <RadioControl active={active} label={label} />
            </HorizontalLayer>
        </TouchableOpacity>
    );
}
