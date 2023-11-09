import {Navigation} from 'react-native-navigation';
import {setInitialRoot} from '@shared/navigation/roots';
import {
  registerComponents,
  setDefaultOptions,
} from '@shared/navigation/navigation';
import CodePush, {SyncOptions} from 'react-native-code-push';

const codePushOptions: SyncOptions = {
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export function initializeApp() {
  //   setLanguage();
  //   setDefaultOrientation();
  CodePush.sync(codePushOptions);
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
}
