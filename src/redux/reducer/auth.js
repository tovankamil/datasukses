const initStateRegister = {
  nama: '',
  password: '',
  hp: '',
  umur:'',
  jenisKelamin: '',
  koordinator:'',
  alamat:'',
    kota:'',
    kecamatan:'',
    desa:'',
    nik:''

};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER')
    return {
      ...state,
        nama:action.value.nama,
        password:action.value.password,
        hp:action.value.hp,
        jenisKelamin:action.value.jenisKelamin,
    };

  if (action.type === 'SET_ADDRESS')
    return {
      ...state,
      alamat: action.value.alamat,
      kota: action.value.kota,
      kecamatan: action.value.kecamatan,
      kelurahan: action.value.kelurahan,
      nik: action.value.nik,
    };

     if (action.type === 'SET_ALAMAT')
    return {
      ...state,
      alamat: action.value.alamat,

    };
  return state;
};
