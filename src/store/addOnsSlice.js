import { createSlice } from '@reduxjs/toolkit';

const initialAddOnsState = {
  'Online service': false,
  'Larger storage': false,
  'Customizable profile': false,
};

const addOnsSlice = createSlice({
  name: 'addOns',
  initialState: initialAddOnsState,
  reducers: {
    toggleAddOn(state, action) {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const addOnsActions = addOnsSlice.actions;

export default addOnsSlice.reducer;
