import React, { forwardRef } from 'react';
import { SegmentedControlProps } from './types';
import { useControllableState } from '../../hooks/useControllableState';
import { BaseSegmentedControl } from './BaseSegmentedControl';

const SegmentedControl = forwardRef(
    (
        { onChange, onValueChange, selectedIndex: selectedIndexProp, defaultSelectedIndex, values, ...others }: SegmentedControlProps,
        ref: any
    ): JSX.Element => {
        const onIndexChange = (index: number) => {
            onChange?.(values[index], index);
            onValueChange?.(values[index]);
        };
        const [selectedIndex, setSelectedIndex] = useControllableState(selectedIndexProp, defaultSelectedIndex ?? 0, onIndexChange);
        const handleIndexChange = (index: number) => setSelectedIndex(index);

        return <BaseSegmentedControl ref={ref} values={values} selectedIndex={selectedIndex} onTabPress={handleIndexChange} {...others} />;
    }
);

SegmentedControl.displayName = 'SegmentedControl';

export { SegmentedControl };
