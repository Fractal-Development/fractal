import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScreenActivityState } from '../types';

export function useIsInitialRenderDone(activityState: ScreenActivityState): [boolean, () => void] {
    const [initialRenderDone, setInitialRenderDone] = useState(false);
    const resetInitialRender = useCallback(() => setInitialRenderDone(false), [setInitialRenderDone]);

    // Basically, we only render if the route is active, or was active before.
    // This prevents render calls from tabs the user never opened before.
    useEffect(() => {
        if (activityState >= 1) {
            setInitialRenderDone(true);
        }
    }, [activityState, setInitialRenderDone]);

    return useMemo(() => [initialRenderDone, resetInitialRender], [initialRenderDone, resetInitialRender]);
}
