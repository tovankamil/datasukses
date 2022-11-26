import React, { useMemo } from 'react';
import {StyleSheet, ScrollView, View,Text} from 'react-native';
import {Button, Desa, Gap, Header, RadioButton, SignUpAlamat, SignUpProvinsi, TextInput} from '../../components';
import Select from '../../components/atoms/Select';
import {useForm} from '../../utils';
import {Kota,dataKecamatan,dataDesa} from './data';

const SignUpAddress = ({navigation})=> {
    const [form, setForm] = useForm({
       nama_kota: '',
    kota: '',
    nama_kecamatan: '',
    kecamatan: '',
     nama_desa: '',
    desa: '',
  });

const dSignUpAlamat= useMemo(()=> {
  return <SignUpAlamat/>
},[])

const dSignUpProvinsi= useMemo(()=> {
  return <SignUpProvinsi dataPullKecamatan dataPullDesa Kota dataKecamatan dataDesa />
},[])

const bsubmit = useMemo(()=>{

  return (<Button
            text="Submit"
            color="#0EA137"
            textColor="#F9F9F9"

          />)

},[]);
  return (

    <View>
     {dSignUpAlamat}
      {dSignUpProvinsi}
      {bsubmit}
    </View>

  )
}

export default SignUpAddress;
const styles = StyleSheet.create({
  jenisKelaminContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
