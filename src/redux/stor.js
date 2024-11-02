import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slise";
import taskReducer from "./task-slider";
import { loadState, saveState } from "../config/strorej";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
  },
  preloadedState: loadState("task"),
});

store.subscribe(() => {
  saveState("task", store.getState());
});
