import {useNavigation} from '@react-navigation/core';
import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataKoresponden} from '../../../redux/action';
import {getData} from '../../../utils';
import {AtomListDataKoresponden, Gap} from '../../atoms';

const ListDataKoresponden = () => {
  const globalState = useSelector(
    state => state.dataKorespondenReducer.data_koresponden,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // console.log(globalState);
  const [user, setUser] = useState({});
  useEffect(() => {
    getData('token').then(data => {
      dispatch(getDataKoresponden(data));
    });
  }, []);

  return (
    <View style={styles.container}>
      {globalState?.data?.length > 0 &&
        globalState.data.map((value, key) => {
          return (
            <View>
              <Gap height={12} />
              <AtomListDataKoresponden
                value={value}
                key={key}
                onPress={() => navigation.navigate('DetailKoresponden', value)}
              />
            </View>
          );
        })}
    </View>
  );
};

export default React.memo(ListDataKoresponden);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
  },
});
