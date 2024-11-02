import React from "react";
import { removeTask } from "../redux/task-slider";
import { useDispatch } from "react-redux";

export default function User({ id, title }) {
  const dispatch = useDispatch();
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">ID: {id}</h1>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-2">{title}</h2>
        </div>
        <button
          onClick={() => dispatch(removeTask(id))}
          className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          x
        </button>
      </div>
    </div>
  );
}
