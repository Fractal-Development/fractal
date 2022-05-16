import React, { useCallback, useState } from 'react';
import { PickerProps } from './types/PickerProps';
import { PickerButton } from '../PickerButton';
import { usePickerState } from './hooks/usePickerState';
import { useTheme } from '../../../../context';
import { PickerItem } from './PickerItem';
import { BasePicker } from './BasePicker';
import { BlurrediOSModal } from '../../../overlays/modals';

export function Picker({ items, defaultValue, value, onChange, iosDoneText = 'Done', placeholder, ...others }: PickerProps): JSX.Element {
    const [currentValue, onValueChange, index] = usePickerState(defaultValue, items, value, onChange);
    const [modalActive, setModalActive] = useState(false);
    const [hasChanged, setHasChanged] = useState(false);
    const { colors } = useTheme();

    const toggleModal = () => {
        setModalActive((current) => !current);
        setHasChanged(true);
    };

    const handleValueChange = (value: string, index: number) => {
        setHasChanged(true);
        onValueChange(value, index);
    } 

    const renderItem = useCallback(
        (item) => {
            const [value, label] = item;
            return <PickerItem color={colors.text} label={label} value={value} key={value} />;
        },
        [colors.text]
    );

    return (
        <>
            <PickerButton value={hasChanged ?  items[index][1] :  placeholder || items[index][1]} onPress={toggleModal} {...others} />
            <BlurrediOSModal dismissText={iosDoneText} visible={modalActive} onDismiss={toggleModal}>
                <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                    {items.map(renderItem)}
                </BasePicker>
            </BlurrediOSModal>
        </>
    );
}
