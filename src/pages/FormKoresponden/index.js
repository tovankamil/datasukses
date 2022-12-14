import React, {useEffect} from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Header} from '../../components';
import HomeTabSection from '../../components/molecules/HomeTabSection';
import {dataProvinsi, signUpKorespondenAction} from '../../redux/action';
import {getData} from '../../utils';

export default function FormKoresponden({navigation}) {
  const globalState = useSelector(state => state.formKorespondenReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    dispatch(dataProvinsi());
    getData('token').then(data => {
      setUser(data);
    });
  }, []);
  const onPressLearnMore = () => {
    let dataattr = '';
    if (globalState.brosur.length > 0) {
      dataattr += '#brosur';
    }
    if (globalState.spanduk.length > 0) {
      dataattr += '#spanduk';
    }
    if (globalState.baju.length > 0) {
      dataattr += '#baju';
    }
    if (globalState.lainnya.length > 0) {
      dataattr += `#${globalState.lainnya}`;
    }

    Object.assign(globalState, {attribute: dataattr});

    dispatch(signUpKorespondenAction(globalState, navigation, user));
  };

  return (
    <View style={styles.content}>
      <Header
        title="Koresponden"
        subTitle="Form Koresponden"
        onBack={() => navigation.goBack()}
      />
      {/* Tab */}
      <View style={styles.content}>
        <HomeTabSection />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.boxButton}>
          <Button
            style={styles.button}
            onPress={onPressLearnMore}
            text="Simpan"
            textColor="#F9F9F9"
            color="red"
          />
        </View>
        <View style={styles.boxButton}>
          <Button
            style={styles.button}
            onPress={onPressLearnMore}
            text="Draft"
            textColor="#F9F9F9"
            color="green"
          />
        </View>
      </View>
      {/* end tab   */}
    </View>
  );
}

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
