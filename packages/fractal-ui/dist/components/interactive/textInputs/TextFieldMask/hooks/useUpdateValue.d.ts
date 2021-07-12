import { MaskResponse, MaskType } from '../types';
export declare function useUpdateValue(type: MaskType): (newValue: string, oldValue: string) => MaskResponse;
