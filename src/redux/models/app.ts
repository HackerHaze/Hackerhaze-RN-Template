import {createModel} from '@rematch/core';
import type {RootModel} from '.';

type AppState = {
  isOnboardingVisited: boolean;
};

const initialState: AppState = {
  isOnboardingVisited: false,
};

export const app = createModel<RootModel>()({
  state: initialState as AppState,
  reducers: {
    setOnboardingVisited(state) {
      return {
        ...state,
        isOnboardingVisited: true,
      };
    },
  },
  effects: () => ({}),
});
