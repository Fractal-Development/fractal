import React from 'react';
import { LockIcon } from '../../assets/LockIcon';

export function renderLockIcon(color: string, size: number = 22): JSX.Element {
    return <LockIcon height={size} width={size} fill={color} />;
}
