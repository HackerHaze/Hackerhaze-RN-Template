import {Navigation} from 'react-native-navigation';
import {setInitialRoot} from '@shared/navigation/roots';
import {
  registerComponents,
  setDefaultOptions,
} from '@shared/navigation/navigation';
import CodePush, {SyncOptions} from 'react-native-code-push';
import {setLanguage} from '@shared/localization/localization';

const codePushOptions: SyncOptions = {
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export function initializeApp() {
  setLanguage();
  CodePush.sync(codePushOptions);
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
}
