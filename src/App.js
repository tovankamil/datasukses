/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {SignIn, SignUp,SignUpAddress, ValidasiSignUp} from './pages';

import Router from '../src/router';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store ={store}>
        <Router />
        {/* <SignUpAddress/> */}
        {/* <ValidasiSignUp/> */}
      </Provider>
    </NavigationContainer>
  );
};

export default App;
