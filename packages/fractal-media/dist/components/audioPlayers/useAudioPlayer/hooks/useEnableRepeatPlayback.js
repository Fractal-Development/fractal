import { useState, useCallback } from 'react';
export function useEnableRepeatPlayback(repeatPlayback) {
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState(repeatPlayback !== null && repeatPlayback !== void 0 ? repeatPlayback : false);
    const toggleRepeatPlayback = useCallback(() => {
        setEnableRepeatPlayback((currentValue) => !currentValue);
    }, []);
    return { enableRepeatPlayback, toggleRepeatPlayback };
}
//# sourceMappingURL=useEnableRepeatPlayback.js.map