import { useEffect, useRef } from 'react';

export function useUnmountEffect(callback: () => void) {
    const savedCallback = useRef<() => void>();
    savedCallback.current = callback;

    useEffect(() => {
        return () => savedCallback.current?.();
    }, []);
}
