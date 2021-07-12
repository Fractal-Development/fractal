import React from 'react';
import { RadioItem } from './types';
interface RadioGroupItemProps {
    item: RadioItem;
    isLastItem: boolean;
    flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    active: boolean;
    handleChange: (value: string) => void;
}
declare const RadioGroupItem: React.MemoExoticComponent<({ item, isLastItem, flexDirection, active, handleChange }: RadioGroupItemProps) => JSX.Element>;
export { RadioGroupItem };
