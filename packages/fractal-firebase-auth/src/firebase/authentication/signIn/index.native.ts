import auth from '@react-native-firebase/auth';

export async function signIn(email: string, password: string): Promise<void> {
    await auth().signInWithEmailAndPassword(email, password);
}
