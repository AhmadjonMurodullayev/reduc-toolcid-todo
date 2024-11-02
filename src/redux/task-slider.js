import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  count: 0,
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
        count: state.count + 1,
      };
    },
    removeTask: (state, action) => {
        const newTaskList = state.taskList.filter((item) => item.id !== action.payload);
        return {
          ...state,
          taskList: newTaskList,
          count: state.count - 1,
        }
    },
  },
});

export default taskReducer.reducer;
export const { addTask, removeTask } = taskReducer.actions;
