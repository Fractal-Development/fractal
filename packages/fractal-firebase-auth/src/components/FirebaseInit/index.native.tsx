import React from 'react';

interface Props {
    children: JSX.Element;
}

export function FirebaseInit(props: Props): JSX.Element {
    return <>{props.children}</>;
}
