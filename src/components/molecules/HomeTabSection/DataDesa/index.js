import {Picker} from '@react-native-community/picker';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataDesa} from '../../../../redux/action';

import {useForm} from '../../../../utils';
import {SelectKoresponden} from '../../../atoms';

const DataDesa = () => {
  const globalState = useSelector(state => state.dataProvinsiReducer);
  const [form, setForm] = useForm({
    nama_kecamatan: '',
    id_desa: '',
  });
  const dispatch = useDispatch();
  const dispatchData = useCallback(
    value => {
      setForm('id_desa', value);

      // dispatch(dataDesa(value));
      let data = {
        desa: value,
      };
      dispatch({type: 'SET_DESA_KORESPONDEN', value: data});
    },
    [setForm],
  );

  return (
    <View style={styles.input}>
      <Picker
        style={styles.input}
        selectedValue={form.id_desa}
        onValueChange={dispatchData}
      >
        <Picker.Item label="Pilih Desa" value={0} key={0} />
        {globalState.data_desa.map((value, index) => {
          return (
            <Picker.Item
              key={index}
              label={value.nama_desa}
              value={value.id_desa}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default React.memo(DataDesa, (prev, next) => {
  return false;
});
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
