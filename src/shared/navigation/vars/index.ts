export const Screens = {
  main: {
    id: 'MAIN_SCREEN',
    name: 'MainScreen',
  },
  auth: {
    id: 'AUTH_SCREEN',
    name: 'AuthScreen',
  },
  onboarding: {
    id: 'ONBOARDING_SCREEN',
    name: 'OnboardingScreen',
  },
  splash: {
    id: 'SPLASH_SCREEN',
    name: 'SplashScreen',
  },
  tabs: {
    id: 'BOTTOM_TABS',
    name: 'BottomTabs',
  },
  settings: {
    id: 'SETTINGS_SCREEN',
    name: 'SettingsScreen',
  },
} as const;

export const Tabs = {
  main: {
    id: 'MAIN_TAB',
    name: 'MainTab',
  },
  settings: {
    id: 'SETTINGS_TAB',
    name: 'SettingsTab',
  },
} as const;
