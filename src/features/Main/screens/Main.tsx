import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScrollView, View} from 'react-native';
import React from 'react';
import Logo from '@assets/images/logo.svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
// import {localization} from '../../common/localization/localization';
// import {CommonStyles} from '../../core/theme/commonStyles';

const MainScreen: NavigationFunctionComponent = () => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  React.useEffect(() => {
    translateY.value = withRepeat(withTiming(-20, {duration: 1000}), -1, true);
  }, [translateY]);
  return (
    <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
      <Animated.View
        style={[
          {
            flex: 1,
            paddingTop: 20,
            alignItems: 'center',
          },
          animatedStyle,
        ]}>
        <Logo width={50} height={50} />
      </Animated.View>
    </ScrollView>
  );
};

MainScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: false,
    },
    title: {
      text: 'Main Screen',
    },
  },
};

export default MainScreen;
