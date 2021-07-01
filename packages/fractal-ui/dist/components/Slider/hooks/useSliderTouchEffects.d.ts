import { Dispatch, RefObject, SetStateAction } from 'react';
import { EventSource } from '../types';
export declare function useSliderTouchEffects(setEventSource: Dispatch<SetStateAction<EventSource | undefined>>, handleSliderMove: (event: any) => void, sliderRef: RefObject<HTMLDivElement>, setDragging: (dragging: boolean) => void, handleMoveStart: (event: any) => void): void;
