import React, { useCallback, useState } from 'react';
import { PickerProps } from './types/PickerProps';
import { PickerButton } from '../PickerButton';
import { usePickerState } from './hooks/usePickerState';
import { useTheme } from '../../../context/hooks/useTheme';
import { PickerItem } from './PickerItem';
import { BasePicker } from './BasePicker';
import { BlurrediOSModal } from '../../modals';

export function Picker({ items, defaultValue, value, onChange, iosDoneText = 'Done', ...others }: PickerProps): JSX.Element {
    const [currentValue, handleValueChange, index] = usePickerState(defaultValue, items, value, onChange);
    const [modalActive, setModalActive] = useState(false);
    const { colors } = useTheme();

    const toggleModal = () => setModalActive((current) => !current);

    const renderItem = useCallback(
        (item) => {
            const value = item[0];
            const label = item[1];
            return <PickerItem color={colors.text} label={label} value={value} key={value} />;
        },
        [colors.text]
    );

    return (
        <>
            <PickerButton value={items[index][1]} onPress={toggleModal} {...others} />
            <BlurrediOSModal dismissText={iosDoneText} visible={modalActive} onDismiss={toggleModal}>
                <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                    {items.map(renderItem)}
                </BasePicker>
            </BlurrediOSModal>
        </>
    );
}
