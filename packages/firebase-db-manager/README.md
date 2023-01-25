# @bma98/firebase-db-manager

## Description

To try the library easily, you can modify one of the examples available. Consider using your own database in firebase to see how the data is saved, just changed the values at examples/firebase.ts

This library is meant to be used with React Native. The idea is to have a database object that makes it easier to understand the data model behind the app.

### Example

Example is web only so be aware of that, you can make it work on native if you eject and add the respective firebase config files.

### Installation

yarn add @bma98/firebase-db-manager

### Peer dependencies

yarn add @react-native-firebase/app @react-native-firebase/firestore @react-native-firebase/storage firebase

They are not included on the library itself as you may be using different versions for other libraries(or any other reason for this matter). If we add them to the library, if you have a different version, let's say firebase 7.9.0, init is not gonna work.
