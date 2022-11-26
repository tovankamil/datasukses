import React from 'react';
import { Text, View } from 'react-native';
import { useForm } from '../../../utils';
import { TextInput } from '../../atoms';


const SignUpAlamat = ()=>{
    console.log('alamat')
      const [formAlamat, setFormAlamat] = useForm({
    alamat: '',
  });


    return(
        <View>
             <TextInput
            label="Alamat"
            placeholder="Masukan Alamat"
            value={formAlamat.alamat}
            onChangeText={value => setFormAlamat('alamat', value)}
          />
        </View>
    )
}
export default SignUpAlamat;