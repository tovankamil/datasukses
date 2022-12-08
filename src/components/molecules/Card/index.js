import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {IconUserDetail} from '../../../assets';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPhoto}>
        <View style={styles.icon}>
          <IconUserDetail />
        </View>
        <Text style={styles.nama}>Tofan</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.boxData}>
        <View style={styles.dataLayout}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>NIK</Text>
          </View>
          <Text style={styles.dot}>:</Text>
          <View style={styles.isi}>
            <Text style={styles.isiColor}> 0929102912091201020</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxData}>
        <View style={styles.dataLayout}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>USIA</Text>
          </View>
          <Text style={styles.dot}>:</Text>
          <View style={styles.isi}>
            <Text style={styles.isiColor}>34 tahun</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxData}>
        <View style={styles.dataLayout}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>Hp</Text>
          </View>
          <Text style={styles.dot}>:</Text>
          <View style={styles.isi}>
            <Text style={styles.isiColor}> 082292301999</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxData}>
        <View style={styles.dataLayout}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>Alamat</Text>
          </View>
          <Text style={styles.dot}>:</Text>
          <View style={styles.isi}>
            <Text style={styles.isiColor}>
              {' '}
              Jl Pancoran barat 9E Jl Pancoran barat 9EJl Pancoran barat 9EJl
              Pancoran barat 9EJl Pancoran barat 9E Jl Pancoran barat 9E
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.boxData}>
        <View style={styles.dataLayout}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>Kota</Text>
          </View>
          <Text style={styles.dot}>:</Text>
          <View style={styles.isi}>
            <Text style={styles.isiColor}> Kuningan</Text>
          </View>
        </View>
      </View>
      <View style={styles.boxData}>
        <View style={styles.dataLayout}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>Kecamatan</Text>
          </View>
          <Text style={styles.dot}>:</Text>
          <View style={styles.isi}>
            <Text style={styles.isiColor}> Ciwilor</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxData}>
        <View style={styles.dataLayout}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>Desa</Text>
          </View>
          <Text style={styles.dot}>:</Text>
          <View style={styles.isi}>
            <Text style={styles.isiColor}> Ciwilor</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 14,
    padding: 14,
    paddingVertical: 25,
    color: 'black',
  },
  boxPhoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nama: {
    marginTop: 6,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  boxData: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 25,
  },
  dataLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  titleLayout: {
    width: '30%',
  },
  title: {
    flexWrap: 'wrap',
    textTransform: 'uppercase',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  dot: {
    width: '2%',
  },
  isi: {
    width: '68%',
    fontSize: 12,
  },
  isiColor: {
    color: 'black',
  },
});
