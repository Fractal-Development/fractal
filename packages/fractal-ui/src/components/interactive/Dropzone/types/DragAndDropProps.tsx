import { DragEventHandler } from 'react';

export interface DragAndDropEventHandlers {
    onDragOver: DragEventHandler;
    onDragEnter: DragEventHandler;
    onDragLeave: DragEventHandler;
    onDrop: DragEventHandler;
}

export interface DragAndDropProps extends DragAndDropEventHandlers {
    dragFocused: boolean;
}
