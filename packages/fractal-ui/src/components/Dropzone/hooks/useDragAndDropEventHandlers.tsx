import { DragEvent, useState, useCallback } from 'react';
import { DragAndDropProps } from '../types';

export function useDragAndDropEventHandlers(handleFiles: (files: FileList) => void): DragAndDropProps {
    const [dragFocused, setDragFocused] = useState(false);

    const handlePreventDefault = useCallback((dragEvent: DragEvent) => {
        dragEvent.preventDefault();
    }, []);

    const fileDrop = useCallback(
        (dragEvent: DragEvent) => {
            handlePreventDefault(dragEvent);
            setDragFocused(false);
            const files = dragEvent.dataTransfer.files;
            if (files.length > 0) {
                handleFiles(files);
            }
        },
        [handleFiles, handlePreventDefault]
    );

    const handleDragEnter = useCallback(
        (event: DragEvent) => {
            handlePreventDefault(event);
            setDragFocused(true);
        },
        [handlePreventDefault]
    );

    const handleDragLeave = useCallback(
        (dragEvent: DragEvent) => {
            handlePreventDefault(dragEvent);
            setDragFocused(false);
        },
        [handlePreventDefault]
    );

    return { dragFocused, onDragOver: handlePreventDefault, onDragEnter: handleDragEnter, onDragLeave: handleDragLeave, onDrop: fileDrop };
}
