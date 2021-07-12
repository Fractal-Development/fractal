import { Dispatch, SetStateAction } from 'react';
import { EventSource } from '../types';
export declare function useHandleOnMouseDown(setEventSource: Dispatch<SetStateAction<EventSource | undefined>>, handleSliderMove: (event: any) => void, setDragging: (dragging: boolean) => void, handleMoveStart: (event: any) => void): (event: any) => void;
