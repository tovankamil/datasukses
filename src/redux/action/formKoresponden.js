import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData, removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpKorespondenAction = (
  dataRegister,
  navigation,
  token,
) => dispatch => {
  console.log('dataRegister', token);

  Axios.post(`${API_HOST.url}/registerkoresponden`, dataRegister, {
    headers: {
      Authorization: token,
    },
  })
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.data;
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};
