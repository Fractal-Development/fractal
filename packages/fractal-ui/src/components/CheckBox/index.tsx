import React, { forwardRef } from 'react';
import { Layer } from '../containers';
import { CheckBoxProps } from './types';
import { BaseCheckBox } from './BaseCheckBox';
import { useControllableState } from '../../hooks/useControllableState';

const CheckBox = forwardRef(({ value: valueProp, onValueChange, label, ...layerProps }: CheckBoxProps, ref: any): JSX.Element => {
    const [value, setValue] = useControllableState(valueProp, false, onValueChange);

    const handleValueChange = (newValue: boolean) => setValue(newValue);

    return (
        <Layer ref={ref} {...layerProps}>
            <BaseCheckBox value={value} onValueChange={handleValueChange} label={label} />
        </Layer>
    );
});

CheckBox.displayName = 'CheckBox';

export { CheckBox };
