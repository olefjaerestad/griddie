import { getCountFromRemote } from './counter-actions';
import { TCounterAction } from './counter-types';
import { ThunkAction } from 'redux-thunk';
import { TRootState } from '../store';

// ThunkAction<returnType, state, extraArgument, action>
export function getCountAsync(testParam: string): ThunkAction<void, TRootState, unknown, TCounterAction> {
  return async (dispatch, getState) => {
    try {
      dispatch(getCountFromRemote.request(testParam));
      const count: number = await (await fetch('https://someurl.com/counter')).json();
      dispatch(getCountFromRemote.success(count));
    } catch (error) {
      dispatch(getCountFromRemote.failure(Error(error)));
    }
  }
}
