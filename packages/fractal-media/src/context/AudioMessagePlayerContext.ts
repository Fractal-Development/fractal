import { createContext, Dispatch, SetStateAction } from 'react';

export type AudioMessagePlayerContextType<T> = [boolean, Record<string, T>, Dispatch<SetStateAction<Record<string, T>>>];

const defaultValue: AudioMessagePlayerContextType<unknown> = [false, {}, () => {}];

export const AudioMessagePlayerContext = createContext<AudioMessagePlayerContextType<any>>(defaultValue);
