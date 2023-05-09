import {
  configureStore,
} from '@reduxjs/toolkit';

import agentSlice from './agentSlice';

export const store = configureStore({
  reducer: {
    agent: agentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
