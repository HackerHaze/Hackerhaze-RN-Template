import {Options, Navigation} from 'react-native-navigation';
import {registerNavigationComponent} from './helpers/navigationActions';
import MainScreen from '@features/Main/screens';
import {Screens} from './vars';
import AuthScreen from '@features/Auth/screens';

const defaultOptions: Options = {
  topBar: {
    drawBehind: true,
    animate: false,
    visible: false,
  },
  layout: {
    orientation: ['portrait'],
  },
};
export function setDefaultOptions() {
  Navigation.setDefaultOptions(defaultOptions);
}
export function registerComponents() {
  // if (__DEV__) {
  //   registerNavigationComponent(Pages.storybook, StorybookUIRoot);
  // }
  registerNavigationComponent(Screens.auth, AuthScreen);
  registerNavigationComponent(Screens.main, MainScreen);
}
