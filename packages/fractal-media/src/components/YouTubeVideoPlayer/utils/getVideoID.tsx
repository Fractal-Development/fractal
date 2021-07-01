import { MATCH_URL_YOUTUBE } from '../../../patterns';

export function getVideoID(url: string): string | null {
    return url.match(MATCH_URL_YOUTUBE)?.[1] ?? null;
}
