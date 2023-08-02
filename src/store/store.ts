import { configureStore } from '@reduxjs/toolkit';
import tariffsDataReducer from '../features/tariffsData';
import userConfiguratorDataReducer from '../features/userConfiguratorData'

export default configureStore({
  reducer: {
    tariffsData: tariffsDataReducer,
    userConfiguratorData: userConfiguratorDataReducer,
  },
});
