import React from 'react';

import { DatePicker } from '../DatePicker';
import { DatePickerProps } from '../DatePicker/types/DatePickerProps';

export function TimePicker(props: DatePickerProps): JSX.Element {
    return <DatePicker {...props} mode='time' />;
}
