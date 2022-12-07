import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Header} from '../../components';

const DetailKoresponden = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Data Koresponden"
        subTitle="Detail Data Koresponden"
        onBack={() => navigation.goBack()}
      />
      <View>
        <Card />
      </View>
    </View>
  );
};

export default DetailKoresponden;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
