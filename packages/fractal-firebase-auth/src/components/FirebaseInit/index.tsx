import firebase from 'firebase/compat/app';
import React, { useState, useLayoutEffect } from 'react';

interface Config {
    [key: string]: string;
}

interface Props {
    children: JSX.Element;
    firebaseConfig: Config;
    loadingComponent: JSX.Element;
}

export function FirebaseInit(props: Props): JSX.Element {
    const [app, setApp] = useState<firebase.app.App | undefined>(undefined);
    const { firebaseConfig } = props;

    useLayoutEffect(() => {
        if (!firebase.apps.length) {
            setApp(firebase.initializeApp(firebaseConfig));
        }
    }, [firebaseConfig]);

    return <>{app != null ? props.children : props.loadingComponent}</>;
}
