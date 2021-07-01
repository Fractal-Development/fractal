import React, { memo } from 'react';
import { useTheme } from '../../context';
import { RadioButton } from './RadioButton';
import { RadioItem } from './types';

interface RadioGroupItemProps {
    item: RadioItem;
    isLastItem: boolean;
    flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    active: boolean;
    handleChange: (value: string) => void;
}

const RadioGroupItem = memo(({ item, isLastItem, flexDirection, active, handleChange }: RadioGroupItemProps): JSX.Element => {
    const { spacings } = useTheme();

    const handlePress = () => handleChange(item.value);

    return (
        <RadioButton
            marginBottom={flexDirection != 'row' && isLastItem ? 0 : spacings.s}
            marginRight={flexDirection == 'row' && isLastItem ? 0 : spacings.s}
            key={item.value}
            active={active}
            label={item.label}
            value={item.value}
            onPress={handlePress}
        />
    );
});

RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroupItem };
