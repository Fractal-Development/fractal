import { useContext } from 'react';
import { AudioMessagePlayerContext, AudioMessagePlayerContextContextType } from '../AudioMessagePlayerContext';

export function useAudioMessagePlayerContext<T>(): AudioMessagePlayerContextContextType<T> {
    return useContext<AudioMessagePlayerContextContextType<T>>(AudioMessagePlayerContext);
}
