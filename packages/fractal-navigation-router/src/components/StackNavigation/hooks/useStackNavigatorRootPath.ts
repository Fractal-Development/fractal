import { useContext } from 'react';
import { StackNavigatorRootPathContext } from '../context/StackNavigatorRootPathProvider';

export function useStackNavigatorRootPath(): string {
    return useContext(StackNavigatorRootPathContext);
}
