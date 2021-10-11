import React, { forwardRef } from 'react';
import { Layer } from '../../layout';
import { BaseSwitch } from './BaseSwitch';
import { SwitchProps } from './types';

const Switch = forwardRef(({ value, onValueChange, ...layerProps }: SwitchProps, ref: any): JSX.Element => (
        <Layer ref={ref} {...layerProps}>
            <BaseSwitch value={value} onValueChange={onValueChange} />
        </Layer>
    ));

Switch.displayName = 'Switch';

export { Switch };
