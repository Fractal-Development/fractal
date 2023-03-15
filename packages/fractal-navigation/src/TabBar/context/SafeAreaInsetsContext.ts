import { createContext } from 'react';
import { EdgeInsets } from '../../types/EdgeInsets';

const emptyInsets: EdgeInsets = {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
};

export const SafeAreaInsetsContext = createContext<EdgeInsets>(emptyInsets);
