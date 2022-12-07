import {Picker} from '@react-native-community/picker';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataDesa, dataKecamatan, setLoading} from '../../../../redux/action';
import {useForm} from '../../../../utils';
import {SelectKoresponden} from '../../../atoms';

const DataKecamatan = () => {
  const globalState = useSelector(state => state.dataProvinsiReducer);
  const [form, setForm] = useForm({
    nama_kecamatan: '',
    id_kecamatan: '',
  });
  const dispatch = useDispatch();
  const dispatchData = useCallback(
    value => {
      setForm('id_kecamatan', value);
      dispatch(dataDesa(value));
    },
    [setForm],
  );
  const PilihKota = ({form, data}) => {
    if (form.id_kecamatan > 0) {
      return (
        <Picker selectedValue={form} onValueChange={dispatchData}>
          <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
          {data.data_kecamatan.map((value, index) => {
            return (
              <Picker.Item
                key={index}
                label={value.nama_kecamatan}
                value={value.id_kecamatan}
              />
            );
          })}
        </Picker>
      );
    } else {
      return (
        <Picker selectedValue={form} onValueChange={dispatchData}>
          <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
          {data.data_kecamatan.map((value, index) => {
            return (
              <Picker.Item
                key={index}
                label={value.nama_kecamatan}
                value={value.id_kecamatan}
              />
            );
          })}
        </Picker>
      );
    }
  };
  console.log('form1', form);
  return (
    <>
      {/* <Picker selectedValue={form} onValueChange={dispatchData}>
        <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
        {globalState.data_kecamatan &&
          globalState.data_kecamatan.map((value, index) => {
            return (
              <Picker.Item
                key={index}
                label={value.nama_kecamatan}
                value={value.id_kecamatan}
              />
            );
          })}
      </Picker> */}
      <PilihKota form={form.id_kecamatan} data={globalState} />
    </>
  );
};

export default React.memo(DataKecamatan);
