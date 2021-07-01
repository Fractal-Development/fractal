import React, { useCallback } from 'react';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Check } from '../Check';
import { BaseCheckBoxProps } from '../types';

export function BaseCheckBox({ value, onValueChange, label }: BaseCheckBoxProps): JSX.Element {
    const handleValueChange = useCallback((): void => {
        onValueChange?.(!value);
    }, [value, onValueChange]);

    return (
        <TouchableOpacity onPress={handleValueChange}>
            <HorizontalLayer alignItems='center'>
                <Check value={value} label={label} />
            </HorizontalLayer>
        </TouchableOpacity>
    );
}
