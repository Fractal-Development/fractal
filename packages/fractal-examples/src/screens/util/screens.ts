import { routes } from './routes';

export interface Screen {
    name: string;
    path: string;
}

export const componentScreens: Array<Screen> = [
    {
        name: 'Recycler View Fragment',
        path: routes.component.replace(':component', 'recycler_view_fragment_screen')
    },
    {
        name: 'Chip Fragment',
        path: routes.component.replace(':component', 'chip_fragment_screen')
    }
];

export const lastScreenIndex = componentScreens.length - 1;
