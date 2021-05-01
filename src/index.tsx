import './globals';
import React from 'react';
import { App } from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './redux/store';

render(
  <Provider store={store}>
    <Router>
      <App title='Hello world' />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

if (__NODE_ENV__ === 'development') {
  import('@olefjaerestad/hmr/build/client').then((myModule) => {
    new myModule.Client({
      hostname: 'localhost',
      port: 3001,
      verbose: true,
      // onMessageCallback: (e, client) => {
      //   console.log('Client.onMessageCallback()');
      //   console.log(e);
      //   client.replaceNodesByFilename({filename: e.filename});
      // },
      // onOpenCallback: (e) => console.log(e),
      onCloseCallback: (e) => console.log(e),
      onErrorCallback: (e) => console.log(e),
    });
  });
}
