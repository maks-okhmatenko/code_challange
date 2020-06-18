import React from 'react';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
