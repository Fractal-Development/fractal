import React, { Dispatch, SetStateAction } from 'react';
import { ReactElement } from 'react';
export declare type SelectedOptionsType = Array<unknown>;
export declare type SelectedOptionsContextType = [SelectedOptionsType, Dispatch<SetStateAction<SelectedOptionsType>>];
export declare const SelectedOptionsContext: React.Context<SelectedOptionsContextType>;
interface SelectedOptionsProviderProps {
    children: ReactElement;
    controllableSelectedOptions?: Array<unknown>;
    onSelect: (value: unknown | Array<unknown>) => void;
    multiple?: boolean;
}
export declare function SelectedOptionsProvider({ children, controllableSelectedOptions, onSelect, multiple }: SelectedOptionsProviderProps): JSX.Element;
export {};
