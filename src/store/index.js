import { configureStore } from '@reduxjs/toolkit';

import infoReducer from './infoSlice';
import planReducer from './planSlice';
import stepReducer from './stepSlice';

const store = configureStore({
  reducer: {
    info: infoReducer,
    plan: planReducer,
    step: stepReducer,
  },
});

export default store;
