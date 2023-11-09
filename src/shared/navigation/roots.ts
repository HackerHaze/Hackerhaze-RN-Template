import {Navigation} from 'react-native-navigation';
import {Screens, Tabs} from './vars';
import {localization} from '@shared/localization/localization';
import {SFSymbols} from '@assets/symbols/SFSymbols';
import {getPlatformTabsIcon} from './helpers/navigationIconHelpers';
import {Colors} from '@core/theme/colors';

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Screens.splash.name,
        id: Screens.splash.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}
export function setOnboardingRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Screens.onboarding.name,
        id: Screens.onboarding.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setTabsRoot(callback?: () => void) {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: Screens.tabs.id,
        children: [
          {
            stack: {
              id: Tabs.main.id,
              children: [
                {
                  component: {
                    id: Screens.main.id,
                    name: Screens.main.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: localization.main.title,
                  ...getPlatformTabsIcon(
                    SFSymbols.house,
                    SFSymbols['house.fill'],
                    'house',
                  ),
                  iconColor: Colors.black,
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.settings.id,
              children: [
                {
                  component: {
                    id: Screens.settings.id,
                    name: Screens.settings.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: localization.settings.title,
                  ...getPlatformTabsIcon(
                    SFSymbols['gearshape.2'],
                    SFSymbols['gearshape.2.fill'],
                    'gear',
                  ),
                  iconColor: Colors.black,
                },
              },
            },
          },
        ],
      },
    },
  }).then(callback);
}

export function setAuthRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Screens.auth.name,
        id: Screens.auth.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}
