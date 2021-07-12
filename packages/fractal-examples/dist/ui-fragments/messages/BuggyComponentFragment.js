import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@bma98/fractal-ui';
export function BuggyComponentFragment() {
    const [showError, setShowError] = useState(false);
    const triggerError = useCallback(() => {
        setShowError(true);
    }, []);
    useEffect(() => {
        if (showError) {
            throw Error('This should be catched, sent by BuggyComponent');
        }
    }, [showError]);
    return React.createElement(Button, { variant: 'danger', text: 'Trigger Error', onPress: triggerError });
}
//# sourceMappingURL=BuggyComponentFragment.js.map