import { createAction, createAsyncAction } from 'typesafe-actions';

export const decreaseCount = createAction('DECREASE_COUNT')();
export const increaseCount = createAction('INCREASE_COUNT')();
export const setCount = createAction('SET_COUNT')<number>();
export const getCountFromRemote = createAsyncAction(
  'GET_COUNT_FROM_REMOTE_REQUEST',
  'GET_COUNT_FROM_REMOTE_SUCCESS',
  'GET_COUNT_FROM_REMOTE_FAILURE',
)<string, number, Error>();
