import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonPrimary} from '../..';
import {Gap, TextInput} from '../../atoms';
import ListDataKoresponden from '../ListDataKoresponden';

const DataTerinput = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.boxButton}>
        <ButtonPrimary
          bg="#0EA137"
          color="white"
          textData="Tambah Baru"
          onPress={() => navigation.navigate('FormKoresponden')}
          _
        />
      </View>
      <ScrollView>
        <View style={styles.tabViewContainer}>
          <View style={styles.tabView}>
            <ListDataKoresponden />
            <Gap height={14} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const DataTerpending = () => {
  return (
    <ScrollView>
      <View style={styles.tabViewContainer}>
        <View style={styles.tabView}>
          <ListDataKoresponden />
          <Gap height={14} />
        </View>
      </View>
    </ScrollView>
  );
};
const Attribute = () => {
  return (
    <View style={styles.tabView}>
      <Text>Identitasx</Text>
    </View>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'green'}}
    style={{backgroundColor: 'white'}}
    labelStyle={{fontSize: 12, color: 'black', fontWeight: 'bold'}}
    tabStyle={{width: 'auto'}}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

const TabListDataKoresponden = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Data Terinput '},
    {key: '2', title: 'Data Terpending'},
  ]);
  const onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };
  const renderScene = SceneMap({
    1: DataTerinput,
    2: DataTerpending,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default TabListDataKoresponden;

const styles = StyleSheet.create({
  tabViewContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  tabView: {
    backgroundColor: 'white',
  },
  boxButton: {
    marginVertical: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
});
