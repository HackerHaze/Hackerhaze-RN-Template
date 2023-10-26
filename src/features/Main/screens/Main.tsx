import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScrollView, Text} from 'react-native';
import React from 'react';
// import {localization} from '../../common/localization/localization';
// import {CommonStyles} from '../../core/theme/commonStyles';

const MainScreen: NavigationFunctionComponent = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior={'automatic'} style={{}}>
      <Text>Main Screen</Text>
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