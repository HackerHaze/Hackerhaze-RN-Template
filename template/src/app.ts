import CodePush, {SyncOptions} from 'react-native-code-push';
import {setLanguage} from '@shared/localization/localization';

const codePushOptions: SyncOptions = {
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export function initializeApp() {
  setLanguage();
  CodePush.sync(codePushOptions);
}
