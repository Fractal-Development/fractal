import { useLocation } from '../router';
import '../URLSearchParams';

export function useQueryParams(): URLSearchParams {
    const location = useLocation();
    return new URLSearchParams(location.search);
}
