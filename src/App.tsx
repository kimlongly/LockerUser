import React from 'react';
import {Provider} from 'react-redux';
import RootNavigation from './navigation/RootNavigation';
import Store from './redux/globalStore';

export default function App() {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
}
