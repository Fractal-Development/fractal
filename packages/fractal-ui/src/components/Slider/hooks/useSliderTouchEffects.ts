import { Dispatch, RefObject, SetStateAction, useCallback, useEffect } from 'react';
import { EventSource } from '../types';

export function useSliderTouchEffects(
    setEventSource: Dispatch<SetStateAction<EventSource | undefined>>,
    handleSliderMove: (event: any) => void,
    sliderRef: RefObject<HTMLDivElement>,
    setDragging: (dragging: boolean) => void,
    handleMoveStart: (event: any) => void
): void {
    const handleTouchMove = useCallback(
        (event: TouchEvent) => {
            setEventSource('touch');
            handleSliderMove(event);
        },
        [handleSliderMove, setEventSource]
    );

    const handleCleanTouchStart = useCallback(() => {
        sliderRef.current?.removeEventListener('touchmove', handleTouchMove);
        setDragging(false);
    }, [handleTouchMove, sliderRef, setDragging]);

    const handleTouchStart = useCallback(
        (event: TouchEvent) => {
            if (event.cancelable) event.preventDefault();
            handleMoveStart(event);

            sliderRef.current?.addEventListener('touchmove', handleTouchMove);
            sliderRef.current?.addEventListener('touchend', handleCleanTouchStart);
            sliderRef.current?.addEventListener('touchcancel', handleCleanTouchStart);
        },
        [handleCleanTouchStart, handleMoveStart, handleTouchMove, sliderRef]
    );

    useEffect(() => {
        const sliderDomElement = sliderRef.current;
        sliderDomElement?.addEventListener('touchstart', handleTouchStart, { passive: false });
        return () => {
            sliderDomElement?.removeEventListener('touchstart', handleTouchStart);
            sliderDomElement?.removeEventListener('touchend', handleCleanTouchStart);
            sliderDomElement?.removeEventListener('touchcancel', handleCleanTouchStart);
        };
    }, [handleCleanTouchStart, handleTouchStart, sliderRef]);
}
