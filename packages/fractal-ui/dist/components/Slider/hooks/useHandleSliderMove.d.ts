import { RefObject } from 'react';
export declare function useHandleSliderMove(maximumValue: number, minimumValue: number, step: number, setValue: (value: number) => void, thumbRef: RefObject<any>, diffRef: RefObject<any>, sliderRef: RefObject<any>): (event: any) => void;
