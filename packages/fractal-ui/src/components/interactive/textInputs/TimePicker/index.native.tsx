import React from 'react';
import { DatePickerProps } from '../DatePicker/types/DatePickerProps';
import { DatePicker } from '../DatePicker';

export function TimePicker(props: Omit<DatePickerProps, 'mode'>): JSX.Element {
    return <DatePicker {...props} mode='time' />;
}
