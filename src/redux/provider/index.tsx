import {store} from '@redux/store';
import {Provider} from 'react-redux';
import React from 'react';

export const provider = (Component: any) => (props: any) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
