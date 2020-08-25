import React from 'react';
import {Provider} from 'react-redux'
import store from './src/Redux/store'
import MainStackNavigator from './src/Navigation/Mainnavigation'
export default function App() {
  return (
    <Provider store={store}>
    <MainStackNavigator/>
    </Provider>
  );
}

