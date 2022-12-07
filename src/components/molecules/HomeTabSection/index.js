import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Gap, TextInput} from '../../atoms';
import DataKota from './DataKota';
import DataKecamatan from './DataKecamatan';
import DataDesa from './DataDesa';
// import {getFoodDataByTypes} from '../../../redux/action';

const Identitas = () => {
  return (
    <ScrollView>
      <View style={styles.tabViewContainer}>
        <View style={styles.tabView}>
          <TextInput label="Nama Lengkap" placeholder="Masukan Nama" />
          <Gap height={14} />
          <TextInput label="Usia" placeholder="Masukan Usia" />
          <Gap height={14} />
          <TextInput label="Nik" placeholder="Masukan Nik 16 Digit" />
          <Gap height={14} />
          <TextInput label="Hp" placeholder="Masukan Hp" />
          <Gap height={14} />
          <TextInput label="Alamat" placeholder="Masukan Alamat" />
          <Gap height={14} />

          <Gap height={14} />

          <DataKota />
          <Gap height={14} />
          <DataKecamatan />
          <Gap height={14} />
          <DataDesa />
        </View>
      </View>
    </ScrollView>
  );
};

const QA = () => {
  return (
    <ScrollView>
      <View style={styles.tabViewContainer}>
        <View style={styles.tabView}>
          <TextInput label="Pertanyaan 1" placeholder="" />
          <Gap height={14} />
          <TextInput label="Pertanyaan 2" placeholder="" />
          <Gap height={14} />
          <TextInput label="Pertanyaan 3" placeholder="" />
          <Gap height={14} />
          <TextInput label="Pertanyaan 4" placeholder="" />
          <Gap height={14} />
          <TextInput label="Pertanyaan 5" placeholder="" />
          <Gap height={14} />
          <TextInput label="Pertanyaan 6" placeholder="" />
          <Gap height={14} />
          <TextInput label="Pertanyaan 7" placeholder="" />
          <Gap height={14} />
        </View>
      </View>
    </ScrollView>
  );
};
const Attribute = () => {
  return (
    <View style={styles.tabView}>
      <Text>Identitas</Text>
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

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Identitas '},
    {key: '2', title: 'Q&A'},
    {key: '3', title: 'Attribute'},
  ]);
  const onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };
  const renderScene = SceneMap({
    1: Identitas,
    2: QA,
    3: Attribute,
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

export default HomeTabSection;

const styles = StyleSheet.create({
  tabViewContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  tabView: {
    backgroundColor: 'white',
  },
});
