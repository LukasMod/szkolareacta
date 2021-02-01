import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './containers/Header/Header';
import Content from './containers/Content/Content';

const App = () => {
  store.subscribe(() => console.log('REDUX STATE', store.getState()));
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Content />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
