import Axios from 'axios';
import {API_HOST} from '../../config';
import {removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const dataProvinsi = () => dispatch => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/provinsi`)
    .then(res => {
      dispatch({type: 'LIST_DATA_PROVINSI', value: res.data.data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};

export const dataKecamatan = id => dispatch => {
  dispatch(setLoading(true));

  Axios.get(`${API_HOST.url}/kecamatan/${id}`)
    .then(res => {
      dispatch({type: 'LIST_DATA_KECAMATAN', value: res.data.data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};

export const dataDesa = id => dispatch => {
  dispatch(setLoading(true));

  Axios.get(`${API_HOST.url}/desa/${id}}`)
    .then(res => {
      dispatch({type: 'LIST_DATA_DESA', value: res.data.data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};
