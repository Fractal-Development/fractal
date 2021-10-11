import { RefObject, ChangeEvent } from 'react';
import { DragAndDropEventHandlers } from './DragAndDropProps';

export interface FileInputProps {
    ref: RefObject<HTMLInputElement>;
    accept: string | undefined;
    multiple: boolean | undefined;
    type: 'file';
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface DropBoxProps {
    dragFocused: boolean;
    dropContainerProps: DragAndDropEventHandlers;
    fileInputProps: FileInputProps;
    onButtonPress: () => void;
    textButton?: string;
    text?: string;
}
