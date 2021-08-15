import { useCallback, useEffect, useMemo, useState } from 'react';
export function useIsInitialRenderDone(activityState) {
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
//# sourceMappingURL=useIsInitialRenderDone.js.map