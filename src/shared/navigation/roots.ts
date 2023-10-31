import {Navigation} from 'react-native-navigation';
import {Screens, Tabs} from './vars';

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
                  text: 'Main Screen',
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
                  text: 'Settings Screen',
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
