# @bma98/fractal-ui

## Description

UI Components easy to customize for apps made by Fractal.

### Installation

`yarn add @bma98/fractal-ui`

### Peer Dependencies

Depending on the platforms that you want to support, we have different peer-dependencies that you should install for `fractal-ui` to work as expected. We are aware that we might be using too many dependencies for some people's taste, but the thing is that most of our projects were using this before anyways, and we are trying to reduce the need of configuration so we are adding this by default.

We have other dependencies that are used by all platforms so we manage that automatically.

#### Expo(Web, iOS and Android)

```
"@motify/core": "^0.17.1",
"@react-native-community/datetimepicker": "^6.0.1",
"@react-native-community/slider": "^4.2.1",
"@react-native-picker/picker": "^2.1.0",
"expo-blur": "^11.0.0",
"expo-document-picker": "^10.1.3",
"moti": "^0.17.1",
"react": "17.0.2",
"react-native": "~0.67.3",
"react-native-reanimated": "^2.4.1",
"react-native-svg": "12.3.0",
"react-virtualized-auto-sizer": "^1.0.6",
"react-native-gesture-handler": "^2.3.2",
"framer-motion": "^6.5.1",
```

#### React Native(iOS and Android only)

```
"@motify/core": "^0.17.1",
"@react-native-community/datetimepicker": "^6.0.1",
"@react-native-community/slider": "^4.2.1",
"@react-native-picker/picker": "^2.1.0",
"expo-blur": "^11.0.0",
"expo-document-picker": "^10.1.3",
"moti": "^0.17.1",
"react": "17.0.2",
"react-native": "~0.67.3",
"react-native-reanimated": "^2.4.1",
"react-native-svg": "12.3.0",
"react-native-gesture-handler": "^2.3.2",
"framer-motion": "^6.5.1"
```

#### React.JS or Next.JS(Web only)

```
"react": "17.0.2",
"react-virtualized-auto-sizer": "^1.0.6",
"framer-motion": "^6.5.1"
```

### Is there more configuration needed?

Remember to add `import 'react-native-reanimated'` at the beginning of your application if you are using react native.

Depending on your set up for React.JS or Next.JS you might need to transpile our modules too, check out our examples in this same repo to see a small project using `fractal-ui`.

### Is it a problem if we do not use the exact same React version?

Most of the time no, we are only trying to always use the latest version, but you should be fine using any other version of React.
