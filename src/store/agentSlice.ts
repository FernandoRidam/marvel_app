import {
  PayloadAction,
  SliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit';

const initialState: number = 0;

const _save = ( state: number, action: PayloadAction<number>) => state = action.payload;
const _reset = ( state: number ) => state = initialState;

const agentSlice = createSlice<number, SliceCaseReducers<number>>({
  name: 'agent',
  initialState,
  reducers: {
    save: _save,

    reset: _reset,
  },
});

export const {
  save,
  reset,
} = agentSlice.actions;

export default agentSlice.reducer;
