import { ReactNode } from 'react';
import { LayerProps } from '../../../../layout';
import { FractalTextProps } from '../../../../../sharedProps';

type ItemValue = number | string;

interface BasicPickerProps {
    selectedValue?: ItemValue;
    onValueChange?: (itemValue: ItemValue, itemIndex: number) => void;
    enabled?: boolean;
    mode?: 'dialog' | 'dropdown';
    itemStyle?: any; // StyleProp<TextStyle>;
    prompt?: string;
    testID?: string;
    dropdownIconColor?: string;
}

export interface BasePickerProps extends Partial<Omit<LayerProps, 'children'>>, BasicPickerProps, FractalTextProps {
    children: ReactNode;
}
