import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {Dispatch} from '@redux/store';
import {setTabsRoot} from '@shared/navigation/roots';

function AuthScreen(): JSX.Element {
  const dispatch = useDispatch<Dispatch>();
  const onPressAuthButton = () => {
    dispatch.auth.setAuthenticated(true);
    setTabsRoot();
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPressAuthButton}>
        <Text>Do Auth</Text>
      </TouchableOpacity>
      <></>
    </SafeAreaView>
  );
}

export default AuthScreen;
