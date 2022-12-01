import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { UserKoresponden } from '../../../assets'

export default class AtomListDataKoresponden extends Component {
  render() {
    return (
      <View style={styles.box}>
          <View style={styles.icon}>
              <UserKoresponden/>
          </View>
            <View style={styles.data}>
               <Text style={styles.nama}> Latifa </Text>
               <Text style={styles.alamat}> 33 Tahun , Kuningan </Text>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    box:{

        backgroundColor:'#ffffff',
        borderRadius:15,
        paddingHorizontal:23,
        paddingVertical:14,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'flex-start',
shadowColor: "#eeeeee",
shadowOffset: {
  width: 20,
  height: 1,
},
shadowOpacity:  0.6,
shadowRadius: 1.81,
elevation: 12
},
data:{
    marginLeft:14
},
nama:{
fontFamily:'Poppins-medium',
fontFamily:'bold',
fontSize:16,
color:'#000000'

},
alamat:{
    fontSize:11,
    fontFamily:'Poppins-reguler',
    fontWeight:'bold',
    color:'#01B433'
}
})