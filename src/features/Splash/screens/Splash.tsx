import Loading from '@shared/components/Loading';
import {useReduxState} from '@shared/hooks/useReduxState';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  setAuthRoot,
  setOnboardingRoot,
  setTabsRoot,
} from '@shared/navigation/roots';
import React, {useEffect} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const SplashScreen: NavigationFunctionComponent = () => {
  // todo: isOnboardingVisited
  const {isAuthenticated} = useReduxState(state => state.auth);
  const {isOnboardingVisited, loading} = useReduxState(state => state.app);
  // console.warn('Splash');
  useEffect(() => {
    if (isOnboardingVisited) {
      if (isAuthenticated) {
        setTabsRoot();
      } else {
        setAuthRoot();
      }
    } else {
      setOnboardingRoot();
    }
  }, [loading, isOnboardingVisited, isAuthenticated]);

  return <Loading />;
};
