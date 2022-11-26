import React, { useEffect } from 'react';
import {Text, View,StyleSheet, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import {Gap, GroupValidasi, Header} from '../../components';

export const ValidasiSignUp = ({navigation}) => {
     const globalState = useSelector(state=>state.registerReducer);

console.log(globalState)
  return (
  <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Header
        title="Validasi Data"
        subTitle="Mohon periksa kembali data anda"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.page}>
            <Text style={styles.registrasi}>Data Registrasi :</Text>
              <Gap height={16}/>
            {(globalState && typeof globalState !='undefined' && Object.keys(globalState).length >0) &&
            Object.keys(globalState).map((data,index)=>{
                console.log('Object.keys(data).valuex',data)
                if(data.replace(/^\s+|\s+$/gm,'') !=="desa" && data.replace(/^\s+|\s+$/gm,'') !=="kota"  && data.replace(/^\s+|\s+$/gm,'') !=="kecamatan")
                {
                      return(
                        <GroupValidasi key={index} nama={data.replace("_"," ")} title={globalState[data]}/>

                    // <Text key={index}>{data.replace("_"," ")} {globalState[data]}</Text>
                )

                }
                //  if(data.replace(/^\s+|\s+$/gm,'') !=="kecamatan")
                // {
                //       return(
                //         <GroupValidasi key={index} nama={data.replace("_"," ")} title={globalState[data]}/>

                //     // <Text key={index}>{data.replace("_"," ")} {globalState[data]}</Text>
                // )

                // }

                //  if(data.replace(/^\s+|\s+$/gm,'') !=="desa")
                // {
                //       return(
                //         <GroupValidasi key={index} nama={data.replace("_"," ")} title={globalState[data]}/>

                //     // <Text key={index}>{data.replace("_"," ")} {globalState[data]}</Text>
                // )

                // }



            })

          }



        </View>
      </View>
  </ScrollView>
  );
};

export default ValidasiSignUp;
const styles = StyleSheet.create({
    registrasi:{
        fontSize:16,
        fontWeight:'bold'
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
groupvalidasi:{


}
});
