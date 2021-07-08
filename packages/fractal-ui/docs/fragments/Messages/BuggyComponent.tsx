import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../../../src';

export function BuggyComponent(): JSX.Element {
    const [showError, setShowError] = useState(false);

    const triggerError = useCallback(() => {
        setShowError(true);
    }, []);

    useEffect(() => {
        if (showError) {
            throw Error('This should be catched, sent by BuggyComponent');
        }
    }, [showError]);

    return <Button variant='danger' text='Trigger Error' onPress={triggerError} />;
}
