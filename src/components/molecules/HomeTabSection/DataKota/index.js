import {Picker} from '@react-native-community/picker';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataKecamatan, setLoading} from '../../../../redux/action';
import {useForm} from '../../../../utils';
import {SelectKoresponden} from '../../../atoms';

const DataKota = () => {
  const globalState = useSelector(state => state.dataProvinsiReducer);
  const [form, setForm] = useForm({
    nama_kota: '',
    id_kota: '',
  });

  useEffect(() => {}, [globalState, form]);
  const dispatch = useDispatch();
  const dispatchData = useCallback(
    value => {
      setForm('id_kota', value);
      dispatch(dataKecamatan(value));
    },
    [setForm],
  );

  return (
    <View>
      <Kota
        data={globalState}
        onSelectChange={dispatchData}
        value={form.id_kota}
      />
    </View>
  );
};

export default DataKota;

const Kota = ({data, label, value, onSelectChange}) => {
  return (
    <>
      <SelectKoresponden
        label=""
        value={value}
        data={data}
        onSelectChange={onSelectChange}
      />
    </>
  );
};

const styles = StyleSheet.create({
  data: {
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
