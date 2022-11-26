import React, { useMemo } from 'react';
import {Text, View} from 'react-native';


import { dataDesa, dataKecamatan, Kota } from '../../../pages/SignUpAddress/data';
import {useForm} from '../../../utils';
import {Gap, Select, TextInput} from '../../atoms';

 let dataPullKecamatan={} ;
 let dataPullDesa={} ;
const SignUpProvinsi = () => {

  console.log('SignUpProvinsi');
  const [form, setForm] = useForm({
    nama_kota: '',
    kota: '',
    nama_kecamatan: '',
    kecamatan: '',
    nama_desa: '',
    desa: '',
  });


 if(form.kota > 0)
  {
    Kota.filter((data,index)=>{
      if(data.id===form.kota)
     {
    form.nama_kota = data.value
     }
    })
   dataPullKecamatan =  dataKecamatan.filter((data,index)=>{

     if(data.kabupaten_id===form.kota)
     {

     return data
     }

    })
  }


  // cari nama Kecamatan  logik ambil data Desa

  if(form.kecamatan > 0)
  {
   dataPullDesa =  dataDesa.filter((data,index)=>{

     if(data.kecamatan_id===form.kecamatan)
     {
         form.nama_kecamatan = data.value
        return data
     }
})
  }

    if(form.desa > 0)
  {
  dataDesa.filter((data,index)=>{

     if(data.desa_id===form.desa)
     {
         form.nama_desa = data.value
        return data
     }

    })
  }

const memoKota = useMemo(()=>{
      return          <Select
            label="Kota"
            value={form.kota}
            onSelectChange={value => setForm('kota', value)}
            namaSelect="Pilih Kota"
          />
  },[form.kota])

const memoKecamatan = useMemo(()=>{
      return        <Select
            label="Kecamatan"
            value={form.kecamatan}
            datax={dataPullKecamatan}
            namaSelect="Pilih Kecamatan"
            onSelectChange={value => setForm('kecamatan', value)}
          />
  },[form.kecamatan,dataPullKecamatan])


  const memoDesa = useMemo(()=>{
      return  <Select label="Pilih Desa'"
            value={form.desa}
            datax={dataPullDesa}
            onSelectChange={value => setForm('desa', value)}
            namaSelect="Pilih Desa"/>
  },[form.desa,dataPullDesa])

console.log('form.desa',form)
  return (
    <View>
          <Gap height={16} />
          {memoKota}
          <Gap height={15} />
          {memoKecamatan}
          {/* <Select
            label="Kecamatan"
            value={form.kecamatan}
            datax={dataPullKecamatan}
            namaSelect="Pilih Kecamatan"
            onSelectChange={value => setForm('kecamatan', value)}
          /> */}
          <Gap height={15} />
          {/* <Select
            label="Kelurahan/Desa"
            value={form.desa}
            datax={dataPullDesa}
            onSelectChange={value => setForm('kota', value)}
            namaSelect="Pilih Desa"
          /> */}
          {memoDesa}

    </View>
  );
};
export default SignUpProvinsi;
