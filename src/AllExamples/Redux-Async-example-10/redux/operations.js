import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from '../redux/tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     // Индикатор загрузки
//     dispatch(fetchingInProgress());
//     // HTTP-запрос
//     const response = await axios.get('/tasks');
//     // Обработка данных
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обработка ошибки
//     dispatch(fetchingError(e.message));
//   }
// };

// export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
//   const response = await axios.get('/tasks');
//   return response.data;
// });

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);