import {Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Logo from '@assets/images/logo.svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {useDispatch} from 'react-redux';
import {Dispatch} from '@redux/store';
import {StackActions, useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

interface HeaderCenterProps {
  animatedStyle: any;
}

const HeaderCenter: React.FC<HeaderCenterProps> = ({animatedStyle}) => (
  <Animated.View
    style={[
      {
        alignItems: 'center',
      },
      animatedStyle,
    ]}>
    <Logo width={50} height={50} />
  </Animated.View>
);
interface HeaderRightProps {
  onLogout: () => void;
}

const HeaderRight: React.FC<HeaderRightProps> = ({onLogout}) => (
  <Text onPress={onLogout} style={{paddingRight: 20, color: 'blue'}}>
    Logout
  </Text>
);
const HomeScreen: React.FC = () => {
  const translateY = useSharedValue(0);
  const dispatch = useDispatch<Dispatch>();
  const navigation = useNavigation();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  React.useEffect(() => {
    translateY.value = withRepeat(withTiming(-20, {duration: 1000}), -1, true);
  }, [translateY]);
  const onLogout = useCallback(() => {
    dispatch.auth.setAuthenticated(false);
    navigation.dispatch(StackActions.popTo('AuthStack'));
  }, [dispatch, navigation]);

  const headerTitle = useCallback(() => {
    return <HeaderCenter animatedStyle={animatedStyle} />;
  }, [animatedStyle]);

  const headerRight = useCallback(() => {
    return <HeaderRight onLogout={onLogout} />;
  }, [onLogout]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle,
      headerRight,
      headerTitleAlign: 'center',
      gestureDirection: 'slide_from_left',
    });
  }, [navigation, headerTitle, headerRight]);
  return (
    <>
      <WebView
        source={{
          uri: 'https://www.hackerhaze.com/docs/templates/rntemplate/intro',
        }}
      />
    </>
  );
};

export default HomeScreen;
