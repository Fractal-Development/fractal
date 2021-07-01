import React, { memo } from 'react';
import { useTheme } from '../../context';
import { RadioButton } from './RadioButton';
const RadioGroupItem = memo(({ item, isLastItem, flexDirection, active, handleChange }) => {
    const { spacings } = useTheme();
    const handlePress = () => handleChange(item.value);
    return (React.createElement(RadioButton, { marginBottom: flexDirection != 'row' && isLastItem ? 0 : spacings.s, marginRight: flexDirection == 'row' && isLastItem ? 0 : spacings.s, key: item.value, active: active, label: item.label, value: item.value, onPress: handlePress }));
});
RadioGroupItem.displayName = 'RadioGroupItem';
export { RadioGroupItem };
//# sourceMappingURL=RadioGroupItem.js.map