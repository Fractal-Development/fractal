import auth from '@react-native-firebase/auth';

export async function resetPassword(email: string): Promise<void> {
    return auth().sendPasswordResetEmail(email);
}
