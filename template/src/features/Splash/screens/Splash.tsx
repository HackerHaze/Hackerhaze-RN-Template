import React, {useEffect} from 'react';

import {useReduxState} from '@shared/hooks/useReduxState';
import {StackActions, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
export const SplashScreen: React.FC = () => {
  const {isAuthenticated} = useReduxState(state => state.auth);
  const {isOnboardingVisited, loading} = useReduxState(state => state.app);
  const navigation = useNavigation();
  useEffect(() => {
    const checkStatus = async () => {
      if (!loading) {
        if (isAuthenticated) {
          if (isOnboardingVisited) {
            navigation.dispatch(StackActions.replace('MainStack'));
          } else {
            navigation.dispatch(StackActions.replace('OnboardingStack'));
          }
        } else {
          navigation.dispatch(StackActions.replace('AuthStack'));
        }
      }
    };

    checkStatus();
  }, [navigation, loading, isAuthenticated, isOnboardingVisited]);

  return (
    <>
      <SafeAreaView />
    </>
  );
};
