var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useMemo } from 'react';
import { Picker } from '../Picker';
import { numberToArray } from '../utils/numberToArray';
import { getDaysInMonth } from './util/getDaysInMonth';
import { getYearsInRange } from './util/getYearsInRange';
import { localeMonthNames } from './util/localeMonthNames';
import { Layer } from '../../containers';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { useTheme } from '../../../context/hooks/useTheme';
import { useControllableState } from '../../../hooks/useControllableState';
export function DatePicker(_a) {
    var { value, minDate, maxDate, initialDate = new Date(), onChange } = _a, others = __rest(_a, ["value", "minDate", "maxDate", "initialDate", "onChange"]);
    const { spacings } = useTheme();
    const finalMinDate = useMemo(() => minDate !== null && minDate !== void 0 ? minDate : new Date('Jan 1, 1920'), [minDate]);
    const [date, setDate] = useControllableState(value, initialDate, onChange);
    const years = useMemo(() => getYearsInRange(maxDate !== null && maxDate !== void 0 ? maxDate : new Date(), finalMinDate), [maxDate, finalMinDate]);
    const days = useMemo(() => {
        const amountOfDaysInMonth = getDaysInMonth(2021, date.getMonth());
        return numberToArray(amountOfDaysInMonth);
    }, [date]);
    const onYearChange = useCallback((pair) => {
        const yearIndex = Number(pair[0]);
        const newDate = new Date(date);
        newDate.setFullYear(yearIndex);
        setDate(newDate);
    }, [date, setDate]);
    const onMonthChange = useCallback((pair) => {
        const monthIndex = Number(pair[0]);
        const newDate = new Date(date);
        newDate.setMonth(monthIndex);
        setDate(newDate);
    }, [date, setDate]);
    const onDayChange = useCallback((pair) => {
        const dayIndex = Number(pair[0]);
        const newDate = new Date(date);
        newDate.setDate(dayIndex);
        setDate(newDate);
    }, [date, setDate]);
    return (React.createElement(Layer, Object.assign({}, others),
        React.createElement(HorizontalLayer, { marginBottom: spacings.m },
            React.createElement(Picker, { value: date.getFullYear().toString(), items: years, flex: 1, onChange: onYearChange }),
            React.createElement(Layer, { marginRight: spacings.m }),
            React.createElement(Picker, { value: date.getMonth().toString(), items: localeMonthNames, flex: 1, onChange: onMonthChange })),
        React.createElement(Picker, { value: date.getDate().toString(), items: days, onChange: onDayChange })));
}
//# sourceMappingURL=index.js.map