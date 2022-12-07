import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, TabListDataKoresponden} from '../../components';

const DataKoresponden = ({navigation}) => {
  const onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };
  return (
    <View style={styles.content}>
      <Header
        title="Data Koresponden"
        subTitle="List Data Koresponden"
        onBack={() => navigation.goBack()}
      />
      {/* Tab */}
      <View style={styles.content}>
        <TabListDataKoresponden />
      </View>

      {/* end tab   */}
    </View>
  );
};

export default DataKoresponden;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
  },
  boxButton: {
    padding: 10,

    justifyContent: 'center',
  },
  button: {
    width: '50%',
    color: 'red',
  },
});
