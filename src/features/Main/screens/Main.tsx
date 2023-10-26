import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScrollView} from 'react-native';
import React from 'react';
import Logo from '@assets/images/logo.svg';
// import {localization} from '../../common/localization/localization';
// import {CommonStyles} from '../../core/theme/commonStyles';

const MainScreen: NavigationFunctionComponent = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior={'automatic'} style={{}}>
      <Logo width={50} height={50} />
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
