import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { store } from './redux/indexToolkit';
import { ResponsePopupProvider } from './contexts/ResponsePopupProvider';

import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ResponsePopupProvider>
        <Router>
          <App />
        </Router>
      </ResponsePopupProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);