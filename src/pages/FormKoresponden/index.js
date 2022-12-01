import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Button, Header, HomeTabSection } from '../../components'

export default function FormKoresponden({navigation}) {
    const onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };
  return (
    <View style={styles.content} >
  <Header title="Koresponden" subTitle="Form Koresponden" onBack={() => navigation.goBack()} />
  {/* Tab */}
  <View style={styles.content}>
    <HomeTabSection/>
  </View>
    <View style={styles.buttonContainer}>

        <View style={styles.boxButton}>
          <Button
            style={styles.button}
            onPress={onPressLearnMore}
            text="Simpan"
            textColor = '#F9F9F9'
            color="red"
          />
        </View>
        <View style={styles.boxButton}>
          <Button
            style={styles.button}
            onPress={onPressLearnMore}
            text="Draft"
            textColor = '#F9F9F9'
            color="green"
          />
        </View>
      </View>
  {/* end tab   */}
    </View>
  )
}

const styles =StyleSheet.create({
  content:{
    flex:1
  },
    buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:'white'
  },
  boxButton: {

    padding: 10,


    justifyContent: 'center',
  },
    button: {

    width: '50%',
    color: 'red',
  },
})
