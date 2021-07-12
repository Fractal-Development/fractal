export function getSliderInputAccessibilityProps(value, isDragging, min, max, disabled) {
    return {
        role: 'Slider',
        'data-active': isDragging,
        'aria-valuetext': `${value}`,
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-orientation': 'horizontal',
        'aria-disabled': disabled
    };
}
//# sourceMappingURL=getSliderInputAccessibilityProps.js.map