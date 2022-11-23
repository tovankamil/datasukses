
import React from 'react'
import Axios from 'axios';
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { useForm } from '../../utils'
import { useSelector } from 'react-redux';

const SignIn = ({navigation}) => {
  const globalState = useSelector(state=>state.globalReducer)
  const [form,setForm] = useForm({
  email:'',
  password:''
})
  const onSubmit = () => {
    console.log('http://192.168.1.5:8080/testapi2',form);
    Axios.get('https://aghniya.co.id/api')
    .then(res =>{
      console.log('success',res);
    })
    .catch(er =>{
      console.log('error',er);
    });


  };

  return (
    <View style={styles.page} >

        <Header title="Login"   />
        <View style={styles.container}>
          <TextInput label="NIK" placeholder="Masukan NIK"  value={form.email}
            onChangeText={(value) => setForm('email', value)}/>
          <Gap height={16}/>
          <TextInput label="Password" placeholder="Masukan Password"   value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry/>
          <Gap height={26}/>
          <Button text="Masuk"  color = '#0EA137'  textColor = '#F9F9F9'  onPress={onSubmit}/>
          <Gap height={14}/>
          <Button text="Buat Akun Baru"   color = '#8D92A3'  textColor = '#F9F9F9'  onPress={()=>navigation.navigate('SignUp')} />
        </View>
    </View>
  )
}

export default SignIn;
const styles = StyleSheet.create({
  page:{
    flex:1
  },
  container:{
     backgroundColor:'white',
    paddingHorizontal:24,
    paddingVertical:26,
    marginTop:24,
    flex:1,
  },
  input:{
    paddingHorizontal:10,
    backgroundColor:"white"
  }

})

