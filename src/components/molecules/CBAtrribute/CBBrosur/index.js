import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CBBrosur = ({label}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
        tintColors={{true: '#ddd', false: '#ddd'}}
      />
      <Text style={styles.labeldata}>{label}</Text>
    </View>
  );
};

export default CBBrosur;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    borderColor: '#020202',
  },
  labeldata: {
    margin: 8,
    color: 'black',
  },
});
