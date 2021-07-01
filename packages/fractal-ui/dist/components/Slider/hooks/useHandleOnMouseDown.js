import { useCallback } from 'react';
export function useHandleOnMouseDown(setEventSource, handleSliderMove, setDragging, handleMoveStart) {
    const handleMouseMove = useCallback((event) => {
        setEventSource('mouse');
        handleSliderMove(event);
    }, [handleSliderMove, setEventSource]);
    const handleCleanMouseUp = useCallback(() => {
        document.removeEventListener('mouseup', handleCleanMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
        setDragging(false);
    }, [handleMouseMove, setDragging]);
    return useCallback((event) => {
        handleMoveStart(event);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleCleanMouseUp);
    }, [handleMoveStart, handleMouseMove, handleCleanMouseUp]);
}
//# sourceMappingURL=useHandleOnMouseDown.js.map