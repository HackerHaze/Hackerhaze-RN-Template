import React from 'react';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@redux/store';
import {Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigation = useNavigation();
  const onPressAuthButton = () => {
    dispatch.auth.setAuthenticated(true);
    navigation.dispatch(StackActions.replace('MainStack'));
  };
  return (
    <View>
      <Text onPress={onPressAuthButton}>Login</Text>
      <></>
    </View>
  );
};

export default LoginScreen;
