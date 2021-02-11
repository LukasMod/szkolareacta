import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';
import store from './store/store';
import Header from './containers/Header/Header';
import Content from './containers/Content/Content';

const persistor = persistStore(store);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <SnackbarProvider maxSnack={3}>
              <Header />
              <Content />
            </SnackbarProvider>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
