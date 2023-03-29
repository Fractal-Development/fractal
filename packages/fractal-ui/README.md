# @fractal-software/fractal-ui

## Description

UI Components easy to customize for apps made by Fractal.

### Installation

`yarn add @fractal-software/fractal-ui`

### Peer Dependencies

Depending on the platforms that you want to support, we have different peer-dependencies that you should install for `fractal-ui` to work as expected. We are aware that we might be using too many dependencies for some people's taste, but the thing is that most of our projects were using this before anyways, and we are trying to reduce the need of configuration so we are adding this by default.

We have other dependencies that are used by all platforms so we manage that automatically.

#### Expo(Web, iOS and Android)

```
"@react-native-community/datetimepicker": "6.7.3",
"@react-native-community/slider": "4.4.2",
"@react-native-picker/picker": "2.4.8",
"expo-blur": "~12.2.2",
"expo-document-picker": "~11.2.1",
"moti": "^0.21.0",
"react": "18.2.0",
 "react-native": "0.71.4",
"react-native-reanimated": "~2.14.4",
"react-native-svg": "13.4.0",
"react-virtualized-auto-sizer": "^1.0.7"
"react-native-gesture-handler": "~2.8.0",
"framer-motion": "^6.5.1",
```

#### React Native(iOS and Android only)

```
"@react-native-community/datetimepicker": "6.7.3",
"@react-native-community/slider": "4.4.2",
"@react-native-picker/picker": "2.4.8",
"expo-blur": "~12.2.2",
"expo-document-picker": "~11.2.1",
"moti": "^0.21.0",
"react": "18.2.0",
 "react-native": "0.71.4",
"react-native-reanimated": "~2.14.4",
"react-native-svg": "13.4.0",
"react-virtualized-auto-sizer": "^1.0.7"
"react-native-gesture-handler": "~2.8.0",
"framer-motion": "^6.5.1",
```

#### React.JS or Next.JS(Web only)

```
"react": "18.2.0",
"react-virtualized-auto-sizer": "^1.0.7"
```

### Is there more configuration needed?

Remember to add `import 'react-native-reanimated'` at the beginning of your application if you are using react native.

Depending on your set up for React.JS or Next.JS you might need to transpile our modules too, check out our examples in this same repo to see a small project using `fractal-ui`.

### Is it a problem if we do not use the exact same React version?

Most of the time no, we are only trying to always use the latest version, but you should be fine using any other version of React.
