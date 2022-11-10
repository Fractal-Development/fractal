import { useContext } from 'react';
import { FractalRoutesContext } from '../context/FractalRoutesProvider';

export function useFractalRoutesIdentifier(identifier: string) {
    const routes = useContext(FractalRoutesContext);
    return routes[identifier];
}
