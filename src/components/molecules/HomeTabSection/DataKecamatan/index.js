import {Picker} from '@react-native-community/picker';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
      let data = {
        kecamatan: value,
      };
      dispatch({type: 'SET_KECAMATAN_KORESPONDEN', value: data});
    },
    [setForm],
  );
  const PilihKota = ({form, data}) => {
    if (form.id_kecamatan > 0) {
      return (
        <Picker
          style={{color: 'black'}}
          selectedValue={form}
          onValueChange={dispatchData}
        >
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
        <View style={styles.input}>
          <Picker
            style={{color: '#000000'}}
            selectedValue={form}
            onValueChange={dispatchData}
          >
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
        </View>
      );
    }
  };

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
const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
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
