import { MoneyMask } from '../utils/MoneyMask';
import { PhoneMask } from '../utils/PhoneMask';
export function useUpdateValue(type) {
    if (type == 'phone') {
        return (newValue) => {
            return PhoneMask.toMask(newValue);
        };
    }
    return (newValue, oldValue) => {
        return MoneyMask.toMask(newValue, oldValue);
    };
}
//# sourceMappingURL=useUpdateValue.js.map