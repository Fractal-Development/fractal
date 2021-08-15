import { routes } from './routes';
export const componentScreens = [
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
//# sourceMappingURL=screens.js.map