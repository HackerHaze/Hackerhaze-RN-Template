// import {Screens} from '@shared/vars';
import {LayoutStack} from 'react-native-navigation';
import {Screens} from './vars';

export const AppStack: LayoutStack = {
  children: [
    {
      component: {
        name: Screens,
        options: {
          statusBar: {
            style: 'dark',
          },
        },
      },
    },
  ],
};
