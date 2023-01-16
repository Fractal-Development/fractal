import { useState } from 'react';
import { useAudioMessagePlayerContext } from '../../../../context';

export function useAudioState<T>(messageID: string): [T | undefined, (value: T) => void] {
    const [isInsideProvider, audioInstances, setAudioInstances] = useAudioMessagePlayerContext<T>();
    const localAudioState = useState<T>();

    const setAudioInstance = (instance: T) => {
        setAudioInstances((values) => {
            return { ...values, [messageID]: instance };
        });
    };

    return isInsideProvider ? [audioInstances[messageID], setAudioInstance] : localAudioState;
}
