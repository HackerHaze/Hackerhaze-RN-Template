import {
  init,
  InitConfigRedux,
  RematchDispatch,
  RematchRootState,
} from '@rematch/core';
import updatedPlugin, {ExtraModelsFromUpdated} from '@rematch/updated';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';
import persistPlugin from '@rematch/persist';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import {models, RootModel} from '@redux/models';

type FullModel = ExtraModelsFromLoading<RootModel> &
  ExtraModelsFromUpdated<RootModel>;

interface LoadingPlugin {
  loading: {
    models: RematchRootState<typeof models>;
    effects: Dispatch;
  };
}

const redux: InitConfigRedux = {
  middlewares: [],
  enhancers: [],
};

redux.middlewares?.push(logger);

const persistConfig = {
  key: 'async-storage',
  storage: AsyncStorage,
  whitelist: ['app', 'auth'],
};
const onRehydrateStorage = () => {
  store.dispatch.app.setLoading(false);
};

export const store = init<RootModel, FullModel>({
  models,
  plugins: [
    loadingPlugin(),
    updatedPlugin(),
    immerPlugin(),
    selectPlugin(),
    persistPlugin(persistConfig, undefined, undefined, onRehydrateStorage),
  ],
  redux,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel> & LoadingPlugin;
