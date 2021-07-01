import React, { useCallback, useState } from 'react';
import { PickerButton } from '../PickerButton';
import { DatePickerProps } from './types/DatePickerProps';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useControllableState } from '../../../hooks/useControllableState';

export function DatePicker({
    value,
    initialDate = new Date(),
    mode = 'date',
    minDate,
    maxDate,
    onChange,
    ...others
}: DatePickerProps): JSX.Element {
    initialDate.setSeconds(0);
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useControllableState(value, initialDate, onChange);

    const toggleModal = useCallback(() => {
        setModalActive((current) => !current);
    }, [setModalActive]);

    const onPickerValueChange = useCallback(
        (_, selectedDate) => {
            const currentDate = selectedDate || date;
            toggleModal();
            setDate(currentDate);
        },
        [date, setDate, toggleModal]
    );

    return (
        <>
            <PickerButton
                value={mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString()}
                onPress={toggleModal}
                {...others}
            />
            {modalActive ? (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onChange={onPickerValueChange}
                />
            ) : null}
        </>
    );
}
