import React, { useCallback, useEffect, useState } from 'react';
import { PickerButton } from '../PickerButton';
import { DatePickerProps } from './types/DatePickerProps';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '../../../context/hooks/useTheme';
import { BlurrediOSModal } from '../../modals';
import { useControllableState } from '../../../hooks/useControllableState';

export function DatePicker({
    value,
    initialDate = new Date(),
    mode = 'date',
    minDate,
    maxDate,
    onChange,
    iosDoneText = 'Done',
    ...others
}: DatePickerProps): JSX.Element {
    initialDate.setSeconds(0);
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useControllableState(value, initialDate, onChange);
    const { colors } = useTheme();
    const [textColor, setTextColor] = useState('black');

    const toggleModal = () => setModalActive((current) => !current);

    const onPickerValueChange = useCallback(
        (_, selectedDate) => {
            const currentDate = selectedDate || date;
            setDate(currentDate);
        },
        [date, setDate]
    );

    useEffect(() => {
        // Further info on the bug: https://github.com/react-native-datetimepicker/datetimepicker/issues/308
        // This is really not performant so check constanly if the bug is fixed.
        if (modalActive) {
            setTimeout(() => {
                setTextColor(colors.text);
            }, 100);
        } else {
            setTextColor('black');
        }
    }, [modalActive, colors]);

    return (
        <>
            <PickerButton
                value={mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString()}
                onPress={toggleModal}
                {...others}
            />
            <BlurrediOSModal dismissText={iosDoneText} visible={modalActive} onDismiss={toggleModal}>
                <DateTimePicker
                    value={date}
                    mode={mode}
                    display='spinner'
                    is24Hour
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onChange={onPickerValueChange}
                    textColor={textColor}
                />
            </BlurrediOSModal>
        </>
    );
}
