import {
  PayloadAction,
  SliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit';

import {
  Agent,
} from '../@types/agent';

const agentSlice = createSlice<Agent, SliceCaseReducers<Agent>>({
  name: 'agent',
  initialState: {
    id: 0,
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: '',
    },
  },
  reducers: {
    save: ( state, action: PayloadAction<Agent>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.thumbnail = action.payload.thumbnail;
    },
  },
});

export const {
  save,
} = agentSlice.actions;

export default agentSlice.reducer;
