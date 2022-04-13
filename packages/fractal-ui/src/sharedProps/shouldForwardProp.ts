import { isValidMotionProp } from 'framer-motion';

export function shouldForwardProp(key: string): boolean {
    if (key === 'children') return true;
    return isValidMotionProp(key);
}
