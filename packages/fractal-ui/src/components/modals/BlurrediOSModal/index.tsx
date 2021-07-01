import React from 'react';
import { BlurredModalProps } from './types';

export function BlurrediOSModal(props: BlurredModalProps): JSX.Element | null {
    console.log(props);
    console.log('BlurrediOSModal should only be used on iOS, not on Web or Android');
    return <></>;
}
