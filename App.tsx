/* REACT */
import React from 'react';
/* MODULES */
import {Provider} from 'react-redux';
/* COMPONENTS */
import Navigation from './src/navigation/Navigation';
/* Store */
import {store} from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
