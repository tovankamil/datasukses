import {useNavigation} from '@react-navigation/core';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AtomListDataKoresponden, Gap} from '../../atoms';

const ListDataKoresponden = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AtomListDataKoresponden
        onPress={() => navigation.navigate('DetailKoresponden')}
      />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
      <Gap height={12} />
      <AtomListDataKoresponden />
    </View>
  );
};

export default ListDataKoresponden;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
  },
});
