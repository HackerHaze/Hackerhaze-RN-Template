import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScrollView, Text} from 'react-native';
import React from 'react';
// import {localization} from '../../common/localization/localization';
// import {CommonStyles} from '../../core/theme/commonStyles';

export const SettingsScreen: NavigationFunctionComponent = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior={'automatic'} style={{}}>
      <Text>Settings</Text>
    </ScrollView>
  );
};

SettingsScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: false,
    },
    title: {
      text: 'Settings',
    },
  },
};
