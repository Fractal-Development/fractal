import { useCallback, useEffect, useRef } from 'react';
import { useHistory, useLocation } from '../../../../../router';
// This function will try to preserve the tab state when jumping between multiple ones.
// Whenever the currentPathname changes, and we can consider the tab item as active
// It will update the previous value so when we try to come back it doensn't go to the root path.
// We use a reference as there is no need to re render if the value changes.
export function useGoToTab(rootTabItemPath, active) {
    const history = useHistory();
    const previouslyActiveTabItemPath = useRef(null);
    const currentPathname = useLocation().pathname;
    const goToTab = useCallback(() => {
        var _a;
        if (rootTabItemPath != null) {
            if (previouslyActiveTabItemPath.current === currentPathname) {
                history.replace(rootTabItemPath);
            }
            else {
                history.replace((_a = previouslyActiveTabItemPath.current) !== null && _a !== void 0 ? _a : rootTabItemPath);
            }
        }
    }, [rootTabItemPath, history, previouslyActiveTabItemPath, currentPathname]);
    useEffect(() => {
        if (rootTabItemPath != null && currentPathname.includes(rootTabItemPath) && active) {
            previouslyActiveTabItemPath.current = currentPathname;
        }
    }, [rootTabItemPath, active, currentPathname, previouslyActiveTabItemPath]);
    return goToTab;
}
//# sourceMappingURL=useGoToTab.js.map