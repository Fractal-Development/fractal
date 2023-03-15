import { useContext } from 'react';
import { AudioMessagePlayerContext, AudioMessagePlayerContextType } from '../AudioMessagePlayerContext';

export function useAudioMessagePlayerContext<T>(): AudioMessagePlayerContextType<T> {
    return useContext(AudioMessagePlayerContext);
}
