import Axios from 'axios';
import {API_HOST} from '../../config';
import {removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (dataRegister, navigation) => dispatch => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.data;

      storeData('token', {value: token});
      storeData('userProfile', profile);

      // navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});

      // if (photoReducer.isUploadPhoto) {
      //   const photoForUpload = new FormData();
      //   photoForUpload.append('file', photoReducer);

      //   Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
      //     headers: {
      //       Authorization: token,
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   })
      //     .then((resUpload) => {
      //       profile.profile_photo_url = `${API_HOST.storage}/${resUpload.data.data[0]}`;
      //       storeData('userProfile', profile);
      //       navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      //     })
      //     .catch((err) => {
      //       showMessage(
      //         err?.response?.message || 'Uplaod photo tidak berhasil',
      //       );
      //       navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      //     });
      // } else {
      //   storeData('userProfile', profile);
      //   navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      // }

      dispatch(setLoading(false));
      navigation.navigate('Home');
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.data;
      dispatch(setLoading(false));

      storeData('token', token);
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      // showMessage(err?.response?.data?.data?.message);
      showMessage('Gagal login', 'danger');
    });
};
