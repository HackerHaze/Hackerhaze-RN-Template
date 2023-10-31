import {Models} from '@rematch/core';
import {app} from './app';
import {auth} from './auth';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
  auth: typeof auth;
}

export const models: RootModel = {
  app,
  auth,
};
