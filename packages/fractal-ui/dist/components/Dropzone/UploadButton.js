var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { UploadIcon } from '../../assets/UploadIcon';
import { useTheme } from '../../context';
import { Button } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
export function UploadButton({ onSelectFile, text = 'Seleccionar archivo', acceptedTypes }) {
    const { spacings } = useTheme();
    const pickFile = () => __awaiter(this, void 0, void 0, function* () {
        const result = yield DocumentPicker.getDocumentAsync({ type: acceptedTypes === null || acceptedTypes === void 0 ? void 0 : acceptedTypes.join(',') });
        if (result.type == 'success') {
            onSelectFile({ name: result.name, size: result.size, uri: result.uri, type: '' });
        }
    });
    return (React.createElement(Button, { variant: 'main', onPress: pickFile },
        React.createElement(HorizontalLayer, { justifyContent: 'center', alignItems: 'center', padding: spacings.s },
            React.createElement(UploadIcon, { width: 24, height: 24, fill: 'white' }),
            React.createElement(Text, { variant: 'button', marginLeft: spacings.xs }, text))));
}
//# sourceMappingURL=UploadButton.js.map