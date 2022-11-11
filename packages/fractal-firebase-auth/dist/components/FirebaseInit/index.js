import firebase from 'firebase/compat/app';
import React, { useState, useLayoutEffect } from 'react';
export function FirebaseInit(props) {
    const [app, setApp] = useState(undefined);
    const { firebaseConfig } = props;
    useLayoutEffect(() => {
        if (!firebase.apps.length) {
            setApp(firebase.initializeApp(firebaseConfig));
        }
    }, [firebaseConfig]);
    return React.createElement(React.Fragment, null, app != null ? props.children : props.loadingComponent);
}
//# sourceMappingURL=index.js.map