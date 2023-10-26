import {models, RootModel} from '@redux/models';
import {init} from '@rematch/core';

describe('app store', () => {
  describe('[app] reducer', () => {
    it('setOnboardingVisited should change', async () => {
      const store = init<RootModel>({
        models,
      });
      await store.dispatch.app.setOnboardingVisited();
      const myModelData = store.getState().app.isOnboardingVisited;
      expect(myModelData).toBeTruthy();
    });
  });
});
