import { useState, useCallback } from 'react';
export function useDragAndDropEventHandlers(handleFiles) {
    const [dragFocused, setDragFocused] = useState(false);
    const handlePreventDefault = useCallback((dragEvent) => {
        dragEvent.preventDefault();
    }, []);
    const fileDrop = useCallback((dragEvent) => {
        handlePreventDefault(dragEvent);
        setDragFocused(false);
        const files = dragEvent.dataTransfer.files;
        if (files.length > 0) {
            handleFiles(files);
        }
    }, [handleFiles, handlePreventDefault]);
    const handleDragEnter = useCallback((event) => {
        handlePreventDefault(event);
        setDragFocused(true);
    }, [handlePreventDefault]);
    const handleDragLeave = useCallback((dragEvent) => {
        handlePreventDefault(dragEvent);
        setDragFocused(false);
    }, [handlePreventDefault]);
    return { dragFocused, onDragOver: handlePreventDefault, onDragEnter: handleDragEnter, onDragLeave: handleDragLeave, onDrop: fileDrop };
}
//# sourceMappingURL=useDragAndDropEventHandlers.js.map