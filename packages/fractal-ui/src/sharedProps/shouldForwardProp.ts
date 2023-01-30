import { isValidMotionProp } from 'framer-motion';

const whiteListedKeys = [
    'children',
    'src',
    'href',
    'to',
    'onClick',
    'target',
    'id',
    'onChange',
    'dangerouslySetInnerHTML',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseDown',
    'onTouchStart',
    'onMouseUp',
    'onTouchEnd',
    'placeholder',
    'alt',
    'loading',
    'decoding',
    'cursor'
];

export function shouldForwardProp(key: string): boolean {
    if (whiteListedKeys.includes(key)) return true;
    return isValidMotionProp(key);
}
