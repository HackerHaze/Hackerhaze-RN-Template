import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@redux/store';

export const OnBoarding: NavigationFunctionComponent = () => {
  console.warn('OnBoarding ;)');
  const dispatch = useDispatch<Dispatch>();
  const onPressOnboardingButton = () => {
    dispatch.app.setOnboardingVisited();
  };
  return (
    <>
      <SafeAreaView>
        <Text>OnBoarding</Text>
        <TouchableOpacity
          onPress={onPressOnboardingButton}
          className="w-10 h-10">
          <Text>Finish Onboarding</Text>
        </TouchableOpacity>
        {/* <Pressable onPress={onPressOnboardingButton}>
      </Pressable> */}
      </SafeAreaView>
    </>
  );
};
