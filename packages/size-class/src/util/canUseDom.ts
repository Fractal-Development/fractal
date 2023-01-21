export default function canUseDOM(): boolean {
    return typeof window !== 'undefined' && window.document != null;
}
