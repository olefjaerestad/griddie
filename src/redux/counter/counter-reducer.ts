import {
  decreaseCount,
  getCountFromRemote,
  increaseCount,
  setCount
} from './counter-actions';
import { neverNegative } from './counter-utils';
import { getType } from 'typesafe-actions';
import { TCounterAction, ICounterState } from './counter-types';

function getInitialCounterState(): ICounterState {
  return {
    count: 0,
    isLoading: false,
  }
}

export function counterReducer(state: ICounterState = getInitialCounterState(), action: TCounterAction): ICounterState {
  switch (action.type) {
    case getType(decreaseCount):
      return {
        ...state,
        count: neverNegative(state.count - 1),
      }
    case getType(getCountFromRemote.request):
      return {
        ...state,
        isLoading: true,
      }
    case getType(getCountFromRemote.success):
      return {
        ...state,
        count: neverNegative(action.payload),
        isLoading: false,
      }
    case getType(getCountFromRemote.failure):
      return {
        ...state,
        isLoading: false,
      }
    case getType(increaseCount):
      return {
        ...state,
        count: neverNegative(state.count + 1),
      }
    case getType(setCount):
      return {
        ...state,
        count: neverNegative(action.payload),
      }
    default:
      return state;
  }
}
