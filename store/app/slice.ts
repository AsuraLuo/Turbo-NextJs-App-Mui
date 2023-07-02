import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

type AppState = {
  currency: any;
  loading: boolean;
  storeConfig: any;
};

const initialState = {
  currency: null,
  loading: false,
  storeConfig: null,
} as AppState;

export const slice: Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppConfig: (state: any, action: PayloadAction<any>) => {
      const { currency, storeConfig } = action.payload;
      state.currency = currency;
      state.storeConfig = storeConfig;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    reset: () => initialState,
  },
});
