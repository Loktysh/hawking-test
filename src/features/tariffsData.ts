import { createSlice } from '@reduxjs/toolkit';

export const tariffsDataSlice = createSlice({
  name: 'tariffsData',
  initialState: {
    
  },
  reducers: {
    loadData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
})

export const { loadData } = tariffsDataSlice.actions

export default tariffsDataSlice.reducer
