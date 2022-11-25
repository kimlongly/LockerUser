import React from 'react';
import {Provider} from 'react-redux';
import RootNavigation from './NavigationContainer/RootNavigation';
import Store from './Redux/globalStore';

export default function App() {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
}
