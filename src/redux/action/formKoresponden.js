import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData, removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpKorespondenAction = (
  dataRegister,
  navigation,
  token,
) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/registerkoresponden`, dataRegister, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch(setLoading(false));
      dispatch(getDataKoresponden(token));
      dispatch({type: 'SET_RESET_FORM', value: 'value'});
      navigation.navigate('DataKoresponden');
    })
    .catch(err => {
      dispatch(setLoading(false));

      showMessage('error', err);
    });
};

export const getDataKoresponden = token => dispatch => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/registerkoresponden/all`, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch(setLoading(false));
      dispatch({type: 'LIST_DATA_KORESPONDEN', value: res.data});
    })
    .catch(err => {
      dispatch(setLoading(false));

      showMessage('error', err);
    });
};
