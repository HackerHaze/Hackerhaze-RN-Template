import {Options, Navigation} from 'react-native-navigation';

import AuthScreen from '@features/Auth/screens';
import SplashScreen from '@features/Splash/screens';
import OnBoarding from '@features/OnBoarding/screens';
import SettingsScreen from '@features/Settings/screens';
import MainScreen from '@features/Main/screens';

import {registerNavigationComponent} from './helpers/navigationActions';
import {Screens} from './vars';

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
  // todo: add storybook
  // if (__DEV__) {
  //   registerNavigationComponent(Pages.storybook, StorybookUIRoot);
  // }
  registerNavigationComponent(Screens.splash, SplashScreen);
  registerNavigationComponent(Screens.onboarding, OnBoarding);
  registerNavigationComponent(Screens.auth, AuthScreen);
  registerNavigationComponent(Screens.main, MainScreen);
  registerNavigationComponent(Screens.settings, SettingsScreen);
}
