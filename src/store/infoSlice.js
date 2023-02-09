import { createSlice } from '@reduxjs/toolkit';

const initialInfoState = {
  name: '',
  email: '',
  phone: '',
};

const infoSlice = createSlice({
  name: 'info',
  initialState: initialInfoState,
  reducers: {
    setPersonalInfo(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const infoActions = infoSlice.actions;

export default infoSlice.reducer;
