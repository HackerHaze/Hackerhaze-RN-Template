import {Navigation} from 'react-native-navigation';
import {setInitialRoot} from '@shared/navigation/roots';
import {
  registerComponents,
  setDefaultOptions,
} from '@shared/navigation/navigation';

export function initializeApp() {
  //   setLanguage();
  //   setDefaultOrientation();
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
}
