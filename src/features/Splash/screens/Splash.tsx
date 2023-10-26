import Loading from '@shared/components/Loading';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {setOnboardingRoot, setTabsRoot} from '@shared/navigation/roots';
import React, {useEffect} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const SplashScreen: NavigationFunctionComponent = () => {
  // todo: isOnboardingVisited
  console.warn('Splash');
  useEffect(() => {
    // if (isOnboardingVisited) {
    // todo: add condition for auth
    setTabsRoot();
    // else {
    // setOnboardingRoot();
    // }
  }, []);

  return <Loading />;
};
