import { MaskResponse, MaskType } from '../types';
import { MoneyMask } from '../utils/MoneyMask';
import { PhoneMask } from '../utils/PhoneMask';

export function useUpdateValue(type: MaskType): (newValue: string, oldValue: string) => MaskResponse {
    if (type === 'phone') {
        return (newValue: string) => PhoneMask.toMask(newValue);
    }
    return (newValue: string, oldValue: string) => MoneyMask.toMask(newValue, oldValue);
}
