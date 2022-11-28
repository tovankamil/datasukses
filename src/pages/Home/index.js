import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Button, Gap } from '../../components';
import { getData, removeData } from '../../utils';

const Home = ({navigation}) =>{

const [user, setUser] = useState({});

  useEffect(() => {
      getData('userProfile').then(data=>{
    setUser(data)
 })

  }, []);
   const onSubmit = () => {
   removeData('token');
   removeData('userProfile');
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
 }

    return(
        <View>
             <Text>home{user && user?.nama}</Text>
                <Button text="Keluar"  color = '#0EA137'  textColor = '#F9F9F9'   onPress={onSubmit}/>
          <Gap height={14}/>


        </View>

    )
}
export default Home;