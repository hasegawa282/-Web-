import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Action
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { ThunkAction } from "redux-thunk";

import sampleModule from "./modules/sampleModule";

// rootReducer の準備
const rootReducer = combineReducers({
  sample: sampleModule.reducer
});

// setup 関数を用意してエクスポート
export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
  });
  return store;
};

// Thunk を用いた非同期処理の準備
type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
