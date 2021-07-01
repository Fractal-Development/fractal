import { useState, useCallback } from 'react';

export function useEnableRepeatPlayback(repeatPlayback: boolean | undefined): {
    enableRepeatPlayback: boolean;
    toggleRepeatPlayback: () => void;
} {
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState<boolean>(repeatPlayback ?? false);

    const toggleRepeatPlayback = useCallback(() => {
        setEnableRepeatPlayback((currentValue) => !currentValue);
    }, []);

    return { enableRepeatPlayback, toggleRepeatPlayback };
}
