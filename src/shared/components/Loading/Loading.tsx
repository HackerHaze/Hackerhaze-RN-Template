import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size={'small'} />
    </View>
  );
};
