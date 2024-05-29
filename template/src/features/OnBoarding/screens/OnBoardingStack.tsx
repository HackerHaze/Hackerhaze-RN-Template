import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from './OnBoarding';

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackScreen = () => (
  <OnboardingStack.Navigator>
    <OnboardingStack.Screen name="Onboarding" component={OnBoarding} />
  </OnboardingStack.Navigator>
);

export default OnboardingStackScreen;
