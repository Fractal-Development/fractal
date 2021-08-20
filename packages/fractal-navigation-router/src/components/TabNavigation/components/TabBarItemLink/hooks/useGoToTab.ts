import { useEffect } from 'react';
import { useHistory, useLocation } from '../../../../../router';
import { useTabBarItemHistory } from '../../../hooks/useTabBarItemHistory';

// This function will try to preserve the tab state when jumping between multiple ones.
// Whenever the currentPathname changes, and we can consider the tab item as active
// It will update the previous value so when we try to come back it doensn't go to the root path.
// We use a reference as there is no need to re render if the value changes.
export function useGoToTab(rootTabItemPath: string, active: boolean): () => void {
    const history = useHistory();
    const [tabBarHistory, setTabBarHistory] = useTabBarItemHistory();
    const previouslyActiveTabItemPath = tabBarHistory.get(rootTabItemPath);
    const currentPathname = useLocation().pathname;

    const goToTab = () => {
        if (previouslyActiveTabItemPath === currentPathname) {
            history.replace(rootTabItemPath);
        } else {
            history.replace(previouslyActiveTabItemPath ?? rootTabItemPath);
        }
    };

    useEffect(() => {
        if (rootTabItemPath != null && currentPathname.includes(rootTabItemPath) && active) {
            setTabBarHistory((tabBarHistory) => {
                const newHistory = new Map(tabBarHistory);
                newHistory.set(rootTabItemPath, currentPathname);
                return newHistory;
            });
        }
    }, [rootTabItemPath, active, currentPathname, setTabBarHistory]);

    return goToTab;
}
