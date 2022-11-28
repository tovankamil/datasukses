import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = ({label, value, onSelectChange,namaSelect ,datax}) => {

  const Pilih = () =>{

    if( namaSelect==='Pilih Kota')
    {
      if(typeof value !=='undefined' && Object.keys(value).length ==0 && namaSelect==='Pilih Kota'){
     return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
                   <Picker.Item label="Pilih Kota" value={0} key={0} />
       <Picker.Item label="Kuningan" value="1" key={1} />
       <Picker.Item label="Cirebon" value="2" key={2} />
       <Picker.Item label="Pengadaran" value="3" key={3} />
       <Picker.Item label="Ciamis" value="4" key={4} />

        </Picker>
      </View>

     )
    }
    else{
         return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
            <Picker.Item label="Pilih Kota" value={0} key={0} />
       <Picker.Item label="Kuningan" value="1" key={1} />
       <Picker.Item label="Cirebon" value="2" key={2} />
       <Picker.Item label="Pengadaran" value="3" key={3} />
        <Picker.Item label="Ciamis" value="4" key={4} />

        </Picker>
      </View>

     )
    }
  }

     if( namaSelect==='Pilih Kecamatan')
    {
      if(typeof datax !=='undefined' && Object.keys(datax).length ==0 && namaSelect==='Pilih Kecamatan'){
     return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
                   <Picker.Item label="Pilih Kecamatan" value={0} key={0} />


        </Picker>
      </View>

     )
    }
    else{
         return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
            <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
            {datax && datax.map((data,index)=>{
                return   <Picker.Item label={data.value} value={data.kecamatan_id} key={index} />
            })}


        </Picker>
      </View>

     )
    }
  }

      if( namaSelect==='Pilih Desa')
    {
      if(typeof datax !=='undefined' && Object.keys(datax).length ==0 && namaSelect==='Pilih Desa'){
     return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
                   <Picker.Item label="Pilih Desa" value={0} key={0} />


        </Picker>
      </View>

     )
    }
    else{
         return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
            <Picker.Item label="Pilih Desa" value={0} key={0} />
            {datax && datax.map((data,index)=>{
                return   <Picker.Item label={data.value} value={data.desa_id} key={index} />
            })}


        </Picker>
      </View>

     )
    }
  }
}



  return (
    <View>
      <Text style={styles.label}>{label}</Text>

     <Pilih/>




    </View>
  );
};

export default React.memo(Select);

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
