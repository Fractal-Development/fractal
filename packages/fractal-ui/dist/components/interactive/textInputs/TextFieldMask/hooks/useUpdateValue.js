import { MoneyMask } from '../utils/MoneyMask';
import { PhoneMask } from '../utils/PhoneMask';
export function useUpdateValue(type) {
    if (type === 'phone') {
        return (newValue) => PhoneMask.toMask(newValue);
    }
    return (newValue, oldValue) => MoneyMask.toMask(newValue, oldValue);
}
//# sourceMappingURL=useUpdateValue.js.map