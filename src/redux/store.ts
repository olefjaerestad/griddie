import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from './counter/counter-reducer';
import { StateType } from 'typesafe-actions';

export type TRootState = StateType<ReturnType<typeof createRootReducer>>;

export const store = createRootStore();

export function createRootStore() {
  return createStore(
    createRootReducer(),
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
}

function createRootReducer() {
  return combineReducers({
    counter: counterReducer,
  })
}
