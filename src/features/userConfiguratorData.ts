import { createSlice } from '@reduxjs/toolkit';

export const userConfiguratorData = createSlice({
  name: 'userConfiguratorData',
  initialState: {},
  reducers: {
    change: (state, action) => {
      if (action.payload.multiselect) {
        const prevVal = action.payload.prevVal;
        const value = action.payload.value;
        let newValues;
        if (prevVal) {
          newValues = [...prevVal].concat(value);
          prevVal.includes(value) ? (newValues = newValues.filter(e => e != value)) : null;
        } else {
          newValues = [value];
        }
        return {
          ...state,
          [action.payload.id]: newValues,
        };
      } else {
        return {
          ...state,
          [action.payload.id]: action.payload.value,
        };
      }
    },
  },
});

export const { change } = userConfiguratorData.actions;

export default userConfiguratorData.reducer;
