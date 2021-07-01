import React, { useCallback, useMemo } from 'react';
import { Picker } from '../Picker';
import { DatePickerProps } from './types/DatePickerProps';
import { numberToArray } from '../utils/numberToArray';
import { getDaysInMonth } from './util/getDaysInMonth';
import { getYearsInRange } from './util/getYearsInRange';
import { localeMonthNames } from './util/localeMonthNames';
import { Layer } from '../../containers';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { useTheme } from '../../../context/hooks/useTheme';
import { useControllableState } from '../../../hooks/useControllableState';

export function DatePicker({ value, minDate, maxDate, initialDate = new Date(), onChange, ...others }: DatePickerProps): JSX.Element {
    const { spacings } = useTheme();
    const finalMinDate = useMemo(() => minDate ?? new Date('Jan 1, 1920'), [minDate]);
    const [date, setDate] = useControllableState(value, initialDate, onChange);

    const years = useMemo(() => getYearsInRange(maxDate ?? new Date(), finalMinDate), [maxDate, finalMinDate]);
    const days = useMemo(() => {
        const amountOfDaysInMonth = getDaysInMonth(2021, date.getMonth());
        return numberToArray(amountOfDaysInMonth);
    }, [date]);

    const onYearChange = useCallback(
        (pair) => {
            const yearIndex = Number(pair[0]);
            const newDate = new Date(date);
            newDate.setFullYear(yearIndex);
            setDate(newDate);
        },
        [date, setDate]
    );

    const onMonthChange = useCallback(
        (pair) => {
            const monthIndex = Number(pair[0]);
            const newDate = new Date(date);
            newDate.setMonth(monthIndex);
            setDate(newDate);
        },
        [date, setDate]
    );

    const onDayChange = useCallback(
        (pair) => {
            const dayIndex = Number(pair[0]);
            const newDate = new Date(date);
            newDate.setDate(dayIndex);
            setDate(newDate);
        },
        [date, setDate]
    );

    return (
        <Layer {...others}>
            <HorizontalLayer marginBottom={spacings.m}>
                <Picker value={date.getFullYear().toString()} items={years} flex={1} onChange={onYearChange} />
                <Layer marginRight={spacings.m} />
                <Picker value={date.getMonth().toString()} items={localeMonthNames} flex={1} onChange={onMonthChange} />
            </HorizontalLayer>
            <Picker value={date.getDate().toString()} items={days} onChange={onDayChange} />
        </Layer>
    );
}
