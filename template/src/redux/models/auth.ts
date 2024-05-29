import {createModel} from '@rematch/core';
import type {RootModel} from '.';

type AuthState = {
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  isAuthenticated: true,
};

export const auth = createModel<RootModel>()({
  state: initialState as AuthState,
  reducers: {
    setAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  effects: dispatch => ({
    async validateAuth(payload, rootState) {
      // Make a request to the server to check the authentication status
      // Replace with actual API
      const simulateApiCall = new Promise<boolean>(resolve =>
        setTimeout(() => resolve(true), 1000),
      );

      const isAuthenticated = await simulateApiCall;

      // If the server's authentication status differs from the stored status, update it
      if (isAuthenticated !== rootState.auth.isAuthenticated) {
        dispatch.auth.setAuthenticated(isAuthenticated);
      }
    },
  }),
});
