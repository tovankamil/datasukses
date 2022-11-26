import React, {useMemo} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Button,
  Gap,
  Header,
  RadioButton,
  SignUpAlamat,
  SignUpNik,
  SignUpProvinsi,
} from '../../components';
import {useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const globalState = useSelector(state => state.registerReducer);
  const [form, setForm] = useForm({
    nama_kota: '',
    kota: '',
    nama_kecamatan: '',
    kecamatan: '',
    nama_desa: '',
    desa: '',
  });

  const dSignUpNik = useMemo(() => {
    return <SignUpNik />;
  }, []);
  const dSignUpAlamat = useMemo(() => {
    return <SignUpAlamat />;
  }, []);

  const dSignUpProvinsi = useMemo(() => {
    return (
      <SignUpProvinsi
        dataPullKecamatan
        dataPullDesa
        Kota
        dataKecamatan
        dataDesa
      />
    );
  }, []);

  const onSubmit = () => {
    navigation.navigate('ValidasiSignUp')
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Header
        title="Pendaftaran"
        subTitle="Form Pendaftaran Relawan"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.page}>
          {dSignUpAlamat}
          {dSignUpProvinsi}
          <Gap height={16} />
          {dSignUpNik}
          <Gap height={46} />
          <Button
            text="Submit"
            color="#0EA137"
            textColor="#F9F9F9"
            onPress={onSubmit}
          />
          <Gap height={16} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;
const styles = StyleSheet.create({
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
