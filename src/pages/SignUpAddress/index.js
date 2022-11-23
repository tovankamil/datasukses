import React from 'react';
import {StyleSheet,ScrollView, View} from 'react-native';
import {Button, Gap, Header, RadioButton, TextInput} from '../../components';
import Select from '../../components/atoms/Select';
import { useForm } from '../../utils';


const SignUpAddress = ({navigation}) => {
const [form,setForm] = useForm({
    alamat:'',
    kota:'',
    kecamatan:'',
    desa:'',
    nik:''
})
// RADIO BUTTON
   const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: "Laki-laki",
    value: "L"
}, {
    id: '2',
    label: "Perempuan",
    value: "P"
}];

   const Koordinator = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: "Kecamatan",
    value: "KC"
}, {
    id: '2',
    label: "Pedesaan",
    value: "PD"
}];


   const Kota = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: "Kuningan",
    value: "Kuningan"
}, {
    id: '2',
    label: "Cirebon",
    value: "Cirebon"
}
, {
    id: '3',
    label: "Pengadaran",
    value: "Pengadaran"
}
, {
    id: '4',
    label: "Ciamis",
    value: "Ciamis"
}];
// RADIO BUTTON
console.log(form)
  return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.page}>
      <Header title="Pendaftaran" subTitle="Form Pendaftaran Relawan" onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <TextInput label="Alamat" placeholder="Masukan Alamat" value={form.alamat} onChangeText={(value)=>setForm('alamat',value)}/>
        <Gap height={16} />
         <Select
            label="Kota"
            value={Kota}
            onSelectChange={(value)=>setForm('kota',value)}
          />
        <Gap height={15} />
        <Select
            label="Kecamatan"
          />
          <Gap height={15} />
        <Select
            label="Kelurahan/Desa"
          />
          <Gap height={15} />
     <TextInput label="NIK" placeholder="Masukan Nik 16 digit" value={form.nik} onChangeText={(value)=>setForm('nik',value)} numeric='numeric' />
        <Gap height={45} />
        <Button
          text="Submit"
          color="#0EA137"
          textColor="#F9F9F9"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={14} />

      </View>
    </View>
    </ScrollView>
  );
};

export default SignUpAddress;
const styles = StyleSheet.create({
    jenisKelaminContainer:{
        justifyContent:"flex-start",
        alignItems:"flex-start"
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
