import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@redux/store';
import {setAuthRoot} from '@shared/navigation/roots';

export const OnBoarding: NavigationFunctionComponent = () => {
  const dispatch = useDispatch<Dispatch>();
  const onPressOnboardingButton = () => {
    dispatch.app.setOnboardingVisited();
    setAuthRoot();
  };
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity
          onPress={onPressOnboardingButton}
          className="w-96 h-10">
          <Text>Finish Onboarding Wizard</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
