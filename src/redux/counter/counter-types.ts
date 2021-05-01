import * as actions from './counter-actions';
import { ActionType } from 'typesafe-actions';

export interface ICounterState {
  count: number;
  isLoading: boolean;
}

export type TCounterAction = ActionType<typeof actions>;
