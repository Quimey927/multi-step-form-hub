import { configureStore } from '@reduxjs/toolkit';

import stepReducer from './stepSlice';
import infoReducer from './infoSlice';
import planReducer from './planSlice';
import addOnsReducer from './addOnsSlice';

const store = configureStore({
  reducer: {
    step: stepReducer,
    info: infoReducer,
    plan: planReducer,
    addOns: addOnsReducer,
  },
});

export default store;
