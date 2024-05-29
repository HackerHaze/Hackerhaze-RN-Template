import {ScrollView, Text} from 'react-native';
import React from 'react';
// import {localization} from '../../common/localization/localization';
// import {CommonStyles} from '../../core/theme/commonStyles';

export const SettingsScreen: React.FC = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior={'automatic'} style={{}}>
      <Text>Settings</Text>
    </ScrollView>
  );
};
