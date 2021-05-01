import { TRootState } from '../store';

type TState = Pick<TRootState, 'counter'>;

export const getCount = (state: TState) => state.counter.count;
export const getIsLoading = (state: TState) => state.counter.isLoading;
