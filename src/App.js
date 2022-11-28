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
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import { Loading } from './components';
const App = () => {

  const MainApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer);
  return (
    <NavigationContainer>
      <Router />

        <FlashMessage position="top" />
        {isLoading && <Loading />}
        {/* <SignUpAddress/> */}
        {/* <ValidasiSignUp/> */}
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};
  return (

    <Provider store={store}>
      <MainApp />
    </Provider>

  );
};




// const App = () => {
//   return (
//     <NavigationContainer>
//       <Provider store ={store}>
//         <Router />
//         {/* <SignUpAddress/> */}
//         {/* <ValidasiSignUp/> */}
//       </Provider>
//     </NavigationContainer>
//   );
// };
export default App;
