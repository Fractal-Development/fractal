import produce from 'immer';
export function createAuthenticationState(values) {
    return produce({
        firebaseUser: undefined,
        loading: true,
        credential: undefined
    }, (draft) => {
        Object.assign(draft, values);
    });
}
export function isAuthenticationState(value) {
    const castedValue = value;
    return castedValue.loading != null;
}
//# sourceMappingURL=AuthenticationState.js.map