import { useLocation } from '../router';
import '../URLSearchParams';
export function useQueryParams() {
    const location = useLocation();
    return new URLSearchParams(location.search);
}
//# sourceMappingURL=useQueryParams.js.map