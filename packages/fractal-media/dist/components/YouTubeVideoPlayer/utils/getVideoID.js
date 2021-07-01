import { MATCH_URL_YOUTUBE } from '../../../patterns';
export function getVideoID(url) {
    var _a, _b;
    return (_b = (_a = url.match(MATCH_URL_YOUTUBE)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : null;
}
//# sourceMappingURL=getVideoID.js.map