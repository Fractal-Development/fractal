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
import React, { useCallback } from 'react';
import { useTheme } from '../../../context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Picker } from '../Picker';
import { numberToArray } from '../utils/numberToArray';
import { normalizeHourValues } from './util/normalizeHourValues';
import { useControllableState } from '../../../hooks/useControllableState';
export function TimePicker(_a) {
    var { value, onChange, initialDate = new Date() } = _a, others = __rest(_a, ["value", "onChange", "initialDate"]);
    initialDate.setSeconds(0);
    const { spacings } = useTheme();
    const [date, setDate] = useControllableState(value, initialDate, onChange);
    const hours = normalizeHourValues(numberToArray(24));
    const minutes = normalizeHourValues(numberToArray(59, true));
    const onHoursChange = useCallback((pair) => {
        const hoursIndex = Number(pair[0]);
        const newDate = new Date(date);
        newDate.setHours(hoursIndex);
        setDate(newDate);
    }, [date, setDate]);
    const onMinutesChange = useCallback((pair) => {
        const minutesIndex = Number(pair[0]);
        const newDate = new Date(date);
        newDate.setMinutes(minutesIndex);
        setDate(newDate);
    }, [date, setDate]);
    return (React.createElement(HorizontalLayer, Object.assign({}, others),
        React.createElement(Picker, { value: date.getHours().toString(), items: hours, flex: 1, onChange: onHoursChange, marginRight: spacings.xs }),
        React.createElement(Picker, { value: date.getMinutes().toString(), items: minutes, flex: 1, onChange: onMinutesChange })));
}
//# sourceMappingURL=index.js.map