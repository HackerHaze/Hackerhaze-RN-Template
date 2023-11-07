import React, {useEffect} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

import Loading from '@shared/components/Loading';
import {useReduxState} from '@shared/hooks/useReduxState';
import {
  setAuthRoot,
  setOnboardingRoot,
  setTabsRoot,
} from '@shared/navigation/roots';

export const SplashScreen: NavigationFunctionComponent = () => {
  const {isAuthenticated} = useReduxState(state => state.auth);
  const {isOnboardingVisited, loading} = useReduxState(state => state.app);
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
