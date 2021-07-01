import React, { useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
import { clampValue, valueToPercentage } from '../utils';
import { useTheme } from '../../../context/hooks/useTheme';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { getSliderAccessibilityProps } from '../accessibility/getSliderAccessibilityProps';
import { getSliderInputAccessibilityProps } from '../accessibility/getSliderInputAccessibilityProps';
import { useControllableState } from '../../../hooks/useControllableState';
import { useHandleSliderMove } from '../hooks/useHandleSliderMove';
import { useSliderTouchEffects } from '../hooks/useSliderTouchEffects';
import { useHandleOnKeyDown } from '../hooks/useHandleOnKeyDown';
import { useHandleOnMouseDown } from '../hooks/useHandleOnMouseDown';
import { useCleanEventSource } from '../hooks/useCleanEventSource';
const StyledRange = styled.div `
    position: relative;
    border-radius: 2px;
    height: 4px;
    margin: 8px 0;
    ${extractBackgroundProps};
`;
const StyledThumb = styled.div `
    width: 20px;
    height: 20px;
    border-radius: 10px;
    position: relative;
    top: -8px;
    background: white;
    cursor: pointer;
    ${extractShadowProps};
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
    }
`;
const StyledRangeProgress = styled.div `
    border-radius: 2px;
    position: absolute;
    height: 100%;
    ${extractBackgroundProps}
`;
export function BaseSlider({ value, defaultValue = 0, minimumValue = 0, maximumValue = 1, onValueChange, onSlidingStart, onSlidingComplete, step = 0.001, name }) {
    const [computedValue, setValue] = useControllableState(value, defaultValue, onValueChange);
    const { colors, shadows } = useTheme();
    const [isDragging, setDragging] = useState(false);
    const [eventSource, setEventSource] = useState();
    const sliderRef = useRef(null);
    const thumbRef = useRef(null);
    const diffRef = useRef(null);
    const clampedValue = useRef(clampValue(computedValue, minimumValue, maximumValue));
    clampedValue.current = clampValue(computedValue, minimumValue, maximumValue);
    const trackPercentage = valueToPercentage(clampedValue.current, minimumValue, maximumValue);
    const handleSlidingStart = useCallback(() => {
        onSlidingStart === null || onSlidingStart === void 0 ? void 0 : onSlidingStart(clampedValue.current);
    }, [onSlidingStart]);
    const handleOnKeyDown = useHandleOnKeyDown(maximumValue, minimumValue, step, defaultValue, setValue, clampedValue, setEventSource, handleSlidingStart);
    const handleMoveStart = useCallback((event) => {
        var _a, _b;
        if (thumbRef.current) {
            const { clientX } = (_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : event;
            diffRef.current = clientX - thumbRef.current.getBoundingClientRect().left;
            setDragging(true);
            handleSlidingStart();
        }
    }, [handleSlidingStart]);
    const handleSliderMove = useHandleSliderMove(maximumValue, minimumValue, step, setValue, thumbRef, diffRef, sliderRef);
    const handleMouseDown = useHandleOnMouseDown(setEventSource, handleSliderMove, setDragging, handleMoveStart);
    useSliderTouchEffects(setEventSource, handleSliderMove, sliderRef, setDragging, handleMoveStart);
    useCleanEventSource(isDragging, eventSource, setEventSource, onSlidingComplete, clampedValue);
    return (React.createElement(StyledRange, { ref: sliderRef, backgroundColor: colors.placeholder },
        React.createElement(StyledRangeProgress, { style: {
                width: `${trackPercentage}%`
            }, backgroundColor: colors.mainInteractiveColor }),
        React.createElement(StyledThumb, Object.assign({ ref: thumbRef, onMouseDown: (e) => handleMouseDown(e.nativeEvent), onKeyDown: handleOnKeyDown, style: {
                left: `calc(${trackPercentage}% - 10px)`
            }, boxShadow: shadows.thumbShadow }, getSliderAccessibilityProps())),
        React.createElement("input", Object.assign({ name: name, type: 'hidden', value: clampedValue.current }, getSliderInputAccessibilityProps(clampedValue.current, isDragging, minimumValue, maximumValue)))));
}
//# sourceMappingURL=index.js.map