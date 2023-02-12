import { createSlice } from '@reduxjs/toolkit';

const initialPlanState = {
  plan: 'Arcade',
  price: '$9/mo',
  isMonthly: true,
};

const planSlice = createSlice({
  name: 'plan',
  initialState: initialPlanState,
  reducers: {
    setPlan(state, action) {
      state.plan = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    togglePeriod(state) {
      state.isMonthly = !state.isMonthly;
    },
  },
});

export const planActions = planSlice.actions;

export default planSlice.reducer;
