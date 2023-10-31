import {createModel} from '@rematch/core';
import type {RootModel} from '.';

type AppState = {
  isOnboardingVisited: boolean;
  loading: boolean;
};

const initialState: AppState = {
  isOnboardingVisited: false,
  loading: true,
};

export const app = createModel<RootModel>()({
  state: initialState as AppState,
  reducers: {
    setOnboardingVisited(state) {
      state.isOnboardingVisited = true;
    },
    setLoading(state, payload: boolean) {
      state.loading = payload;
    },
  },
  effects: () => ({}),
});
