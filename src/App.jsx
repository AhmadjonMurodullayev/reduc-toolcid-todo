import React from 'react';
import { increment, decrement } from './redux/counter-slise';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/form';
import User from './components/user';

function App() {
  const { count } = useSelector(state => state.counter);
  const { taskList } = useSelector(state => state.task);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Count: {count}</h1>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            -
          </button>
        </div>
      </div>

      <Form />

      <div className="mt-8 w-full max-w-lg">
        {taskList.map((item) => (
          <User key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
