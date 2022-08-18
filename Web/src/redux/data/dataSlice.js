import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  api: [],
  current: 0,
  apiLength: 0,
};

export const fetchBasicVerbs = createAsyncThunk("data/actionName", () => {
  return window
    .fetch("https://demotres-eyubkh.vercel.app/api")
    .then((res) => res.json())
    .then((data) => data);
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    correct: (state) => {
      state.api.splice(state.current, 1);
      state.current = Math.floor(Math.random() * state.api.length);
    },
    changeCurrent: (state) => {
      state.current = Math.floor(Math.random() * state.api.length);
    },
  },
  extraReducers: {
    [fetchBasicVerbs.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBasicVerbs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.api = action.payload;
      // state.api = []
      state.current = Math.floor(Math.random() * action.payload.length);
      state.apiLength = action.payload.length;
    },
    [fetchBasicVerbs.rejected]: (state) => {
      console.log("rejeceeeeect");
    },
  },
});

export const { correct, changeCurrent } = dataSlice.actions;
export default dataSlice.reducer;
