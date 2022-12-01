import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { AtomListDataKoresponden, Gap } from '../../atoms'

export default class ListDataKoresponden extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
        <Gap height={12}/>
         <AtomListDataKoresponden/>
      </View>
    )
  }
}

const styles =StyleSheet.create({
    container:{
        paddingHorizontal:2
    }
})
