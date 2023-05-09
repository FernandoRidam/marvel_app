import {
  PayloadAction,
  SliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit';

import {
  Agent,
} from '../@types/agent';

const initialState: Agent = {
  id: 0,
  name: '',
  description: '',
  thumbnail: {
    path: '',
    extension: '',
  },
};

const agentSlice = createSlice<Agent, SliceCaseReducers<Agent>>({
  name: 'agent',
  initialState,
  reducers: {
    save: ( state, action: PayloadAction<Agent>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.thumbnail = action.payload.thumbnail;
    },

    reset: ( state ) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.description = initialState.description;
      state.thumbnail = initialState.thumbnail;
    }
  },
});

export const {
  save,
  reset,
} = agentSlice.actions;

export default agentSlice.reducer;
