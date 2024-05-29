import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@redux/store';
import {StackActions, useNavigation} from '@react-navigation/native';

export const OnBoarding: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigation = useNavigation();
  const onPressOnboardingButton = () => {
    dispatch.app.setOnboardingVisited();
    navigation.dispatch(StackActions.replace('MainStack'));
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
