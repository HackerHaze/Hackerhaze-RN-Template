import {Navigation} from 'react-native-navigation';
import {Screens} from './vars';

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Screens.main.name,
        id: Screens.main.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}
