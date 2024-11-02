import React from 'react';
import { useForm } from 'react-hook-form';
import { addTask } from '../redux/task-slider';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export default function Form() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    dispatch(addTask({ ...data, id: nanoid() }));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <input
        type="text"
        {...register("title")}
        placeholder="Enter task title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Send
      </button>
    </form>
  );
}
