import './App.css';
import React from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCount } from '../redux/counter/counter-selectors';
import { decreaseCount, increaseCount } from '../redux/counter/counter-actions';

export interface IAppProps {
  /** What title to display */
  title: string;
}

/**
 * The application itself.
 */
export const App: React.FC<IAppProps> = function({title}) {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  function countDown() {
    dispatch(decreaseCount());
  }

  function countUp() {
    dispatch(increaseCount());
  }

  return (
    <>
      <h1 className="appTitle">Title: {title}</h1>
      <p>I am just a simple component. Use me as a starting point for building something cool!</p>
      <p>Count: {count}</p>
      <button onClick={countUp}>Increase count</button>
      <button onClick={countDown}>Decrease count</button>

      <Link to='/'>Dashboard</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/stats'>Stats</Link>

      <Switch>
        <Route path='/' exact={true}>Display your dashboard here</Route>
        <Route path='/projects' exact={true}>Display your projects here</Route>
        <Route path='/stats' exact={true}>Display your stats here</Route>
      </Switch>
    </>
  )
}
