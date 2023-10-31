import {Dispatch} from '@redux/store';
import React from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

function AuthScreen(): JSX.Element {
  const dispatch = useDispatch<Dispatch>();
  const onPressAuthButton = () => {
    dispatch.auth.setAuthenticated(true);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPressAuthButton}>
        <Text>Auth</Text>
      </TouchableOpacity>
      <></>
    </SafeAreaView>
  );
}

export default AuthScreen;
