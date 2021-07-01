import React, { useCallback } from 'react';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Check } from '../Check';
export function BaseCheckBox({ value, onValueChange, label }) {
    const handleValueChange = useCallback(() => {
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(!value);
    }, [value, onValueChange]);
    return (React.createElement(TouchableOpacity, { onPress: handleValueChange },
        React.createElement(HorizontalLayer, { alignItems: 'center' },
            React.createElement(Check, { value: value, label: label }))));
}
//# sourceMappingURL=index.native.js.map