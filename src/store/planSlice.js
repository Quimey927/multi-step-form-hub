import { createSlice } from '@reduxjs/toolkit';

const initialPlanState = {
  plan: 'Arcade',
  period: 'Monthly',
};

const planSlice = createSlice({
  name: 'plan',
  initialState: initialPlanState,
  reducers: {
    setArcade(state) {
      state.plan = 'Arcade';
    },
    setAdvanced(state) {
      state.plan = 'Advanced';
    },
    setPro(state) {
      state.plan = 'Pro';
    },
    setMonthly(state) {
      state.period = 'Monthly';
    },
    setYearly(state) {
      state.period = 'Yearly';
    },
  },
});

export const planActions = planSlice.actions;

export default planSlice.reducer;
