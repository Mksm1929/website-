import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../page/Project/Todo-List/todosSlice';
import clickerReducer from '../page/Project/Clicker/ClickerSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    clicker: clickerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;