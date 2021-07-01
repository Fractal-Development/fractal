import { ReactNode } from 'react';
import { LayerProps } from '../../../containers/Layer/types';
import { TextProps as FractalTextProps } from '../../../../sharedProps/TextProps';
declare type ItemValue = number | string;
interface BasicPickerProps {
    selectedValue?: ItemValue;
    onValueChange?: (itemValue: ItemValue, itemIndex: number) => void;
    enabled?: boolean;
    mode?: 'dialog' | 'dropdown';
    itemStyle?: any;
    prompt?: string;
    testID?: string;
    dropdownIconColor?: string;
}
export interface BasePickerProps extends Partial<Omit<LayerProps, 'children'>>, BasicPickerProps, FractalTextProps {
    children: ReactNode;
}
export {};
