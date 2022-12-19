import React, { ReactNode, useState } from 'react';
import { AudioMessagePlayerContext } from './AudioMessagePlayerContext';
import { useUnmountEffect } from './hooks/useUnmountEffect';

interface AudioMessagePlayerProviderProps {
    children: ReactNode;
}

export function AudioMessagePlayerProvider({ children }: AudioMessagePlayerProviderProps): JSX.Element {
    const [audioInstances, setAudioInstances] = useState<Record<string, any>>({});

    useUnmountEffect(async () => {
        for (const instance of Object.values(audioInstances)) {
            if (instance != null && typeof instance.unloadAsync === 'function') {
                await instance.unloadAsync();
            }
        }
    });

    return (
        <AudioMessagePlayerContext.Provider value={[true, audioInstances, setAudioInstances]}>
            {children}
        </AudioMessagePlayerContext.Provider>
    );
}
