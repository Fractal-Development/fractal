import React from 'react';
import { EmailIcon } from '../../assets/EmailIcon';

export function renderEmailIcon(color: string, size: number): JSX.Element {
    return <EmailIcon width={size} height={size} fill={color} />;
}
