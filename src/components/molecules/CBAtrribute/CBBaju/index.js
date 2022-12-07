import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CBBaju = ({label}) => {
  const [isSelected, setSelection] = useState(false);
  const [labelData, setLabelData] = useState(label);
  const cek = () => {
    setSelection(prev => !prev);
  };
  console.log(isSelected);
  return (
    <View style={styles.container}>
      <CheckBox
        value={isSelected}
        onValueChange={cek}
        style={styles.checkbox}
        tintColors={{true: 'green', false: '#ddd'}}
      />
      <Text style={styles.labeldata}>{label}</Text>
    </View>
  );
};

export default CBBaju;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
  },
  checkbox: {
    borderColor: '#020202',
  },
  labeldata: {
    margin: 8,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
