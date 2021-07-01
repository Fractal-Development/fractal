import { Dispatch, SetStateAction, useCallback } from 'react';
import { EventSource } from '../types';

export function useHandleOnMouseDown(
    setEventSource: Dispatch<SetStateAction<EventSource | undefined>>,
    handleSliderMove: (event: any) => void,
    setDragging: (dragging: boolean) => void,
    handleMoveStart: (event: any) => void
): (event: any) => void {
    const handleMouseMove = useCallback(
        (event) => {
            setEventSource('mouse');
            handleSliderMove(event);
        },
        [handleSliderMove, setEventSource]
    );

    const handleCleanMouseUp = useCallback(() => {
        document.removeEventListener('mouseup', handleCleanMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
        setDragging(false);
    }, [handleMouseMove, setDragging]);

    return useCallback(
        (event: MouseEvent) => {
            handleMoveStart(event);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleCleanMouseUp);
        },
        [handleMoveStart, handleMouseMove, handleCleanMouseUp]
    );
}
