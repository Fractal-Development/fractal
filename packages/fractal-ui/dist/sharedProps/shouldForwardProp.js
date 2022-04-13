import { isValidMotionProp } from 'framer-motion';
export function shouldForwardProp(key) {
    if (key === 'children')
        return true;
    return isValidMotionProp(key);
}
//# sourceMappingURL=shouldForwardProp.js.map