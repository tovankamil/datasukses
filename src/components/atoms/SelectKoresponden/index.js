import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const SelectKoresponden = ({label, value, onSelectChange, data}) => {
  const Pilih = () => {
    return (
      <Picker
        style={{color: 'black'}}
        selectedValue={value}
        onValueChange={itemValue => onSelectChange(itemValue)}
      >
        <Picker.Item label="Pilih Kota" value={0} key={0} />
        {data?.data_kota.map((value, index) => {
          return (
            <Picker.Item
              key={index}
              label={value.nama_kota}
              value={value.id_kota}
            />
          );
        })}
      </Picker>
    );
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Pilih />
      </View>
    </View>
  );
};

export default React.memo(SelectKoresponden);

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
