import storage from '@react-native-firebase/storage';

export async function uploadFile(path: string, filePath: string): Promise<string> {
    const reference = storage().ref(path);
    await reference.putFile(filePath);
    return reference.getDownloadURL();
}
