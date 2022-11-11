import auth from '@react-native-firebase/auth';

export async function signUp(email: string, password: string): Promise<void> {
    await auth().createUserWithEmailAndPassword(email, password);
}
