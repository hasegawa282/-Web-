import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

import { Sample } from "../../utils/types";
import { sampleGet } from "../../api/sample";

// state の型
export interface SampleState {
  someNum: number;
  someStr: string;
  someList: Sample[];
  isFetching: boolean;
}

// state の初期値
const initialState: SampleState = {
  someNum: 0,
  someStr: "",
  someList: [],
  isFetching: false
};

// actions と reducers の定義
const modules = createSlice({
  name: "sample",
  initialState: initialState,
  reducers: {
    changeNum: (state, action: PayloadAction<SampleState["someNum"]>) => {
      state.someNum = action.payload;
    },
    changeStr: (state, action: PayloadAction<SampleState["someStr"]>) => {
      state.someStr = action.payload;
    },
    addList: (state, action: PayloadAction<Sample>) => {
      state.someList = [...state.someList, action.payload];
    },
    initialize: state => {
      state.someNum = initialState.someNum;
      state.someStr = initialState.someStr;
      state.someList = initialState.someList;
    },
    fetchStart: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.isFetching = true;
    },
    fetchEnd: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.isFetching = false;
    }
  }
});

// 非同期処理 (APIとの通信)
export const sampleAsyncGet = (
  data1: string,
  data2: string
): AppThunk => async dispatch => {
  dispatch(
    modules.actions.fetchStart({
      data1: data1,
      data2: data2
    })
  );
  try {
    const res = await sampleGet(data1, data2);
    dispatch(modules.actions.fetchEnd(res));
  } catch (err) {
    dispatch(modules.actions.fetchEnd(err));
  }
};

export default modules;
