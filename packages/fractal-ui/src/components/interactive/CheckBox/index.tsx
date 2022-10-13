import React, { forwardRef } from 'react';

import { useControllableState } from '../../../hooks/useControllableState';
import { Layer } from '../../layout';
import { BaseCheckBox } from './BaseCheckBox';
import { CheckBoxProps } from './types';

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
