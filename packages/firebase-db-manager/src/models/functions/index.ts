import firebase from 'firebase/compat/app';
import 'firebase/compat/functions';

export default function functions(): ReturnType<typeof firebase.functions> {
    return firebase.functions();
}
