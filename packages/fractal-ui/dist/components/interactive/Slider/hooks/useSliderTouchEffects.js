import { useCallback, useEffect } from 'react';
export function useSliderTouchEffects(setEventSource, handleSliderMove, sliderRef, setDragging, handleMoveStart) {
    const handleTouchMove = useCallback((event) => {
        setEventSource('touch');
        handleSliderMove(event);
    }, [handleSliderMove, setEventSource]);
    const handleCleanTouchStart = useCallback(() => {
        var _a;
        (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('touchmove', handleTouchMove);
        setDragging(false);
    }, [handleTouchMove, sliderRef, setDragging]);
    const handleTouchStart = useCallback((event) => {
        var _a, _b, _c;
        if (event.cancelable)
            event.preventDefault();
        handleMoveStart(event);
        (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('touchmove', handleTouchMove);
        (_b = sliderRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener('touchend', handleCleanTouchStart);
        (_c = sliderRef.current) === null || _c === void 0 ? void 0 : _c.addEventListener('touchcancel', handleCleanTouchStart);
    }, [handleCleanTouchStart, handleMoveStart, handleTouchMove, sliderRef]);
    useEffect(() => {
        const sliderDomElement = sliderRef.current;
        sliderDomElement === null || sliderDomElement === void 0 ? void 0 : sliderDomElement.addEventListener('touchstart', handleTouchStart, { passive: false });
        return () => {
            sliderDomElement === null || sliderDomElement === void 0 ? void 0 : sliderDomElement.removeEventListener('touchstart', handleTouchStart);
            sliderDomElement === null || sliderDomElement === void 0 ? void 0 : sliderDomElement.removeEventListener('touchend', handleCleanTouchStart);
            sliderDomElement === null || sliderDomElement === void 0 ? void 0 : sliderDomElement.removeEventListener('touchcancel', handleCleanTouchStart);
        };
    }, [handleCleanTouchStart, handleTouchStart, sliderRef]);
}
//# sourceMappingURL=useSliderTouchEffects.js.map