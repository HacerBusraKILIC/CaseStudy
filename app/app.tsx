import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import {AppNavigator} from './navigators';
import {PersistGate} from 'redux-persist/integration/react';
// Helpers
const store = configureStore().store;
const persistor = configureStore().persistor;
// App
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export default App;
