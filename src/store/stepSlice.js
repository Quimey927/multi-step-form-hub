import { createSlice } from '@reduxjs/toolkit';

const initialStepState = { step: 1 };

const stepSlice = createSlice({
  name: 'step',
  initialState: initialStepState,
  reducers: {
    incrementStep(state) {
      state.step++;
    },
    decrementStep(state) {
      state.step--;
    },
  },
});

export const stepActions = stepSlice.actions;

export default stepSlice.reducer;
