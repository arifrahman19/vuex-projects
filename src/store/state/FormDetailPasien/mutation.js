export default {
  id(state, value) {
    state.id = value;
  },
  no_rm(state, value) {
    state.no_rm = value;
  },
  nama(state, value) {
    state.nama = value;
  },
  jenis_kelamin(state, value) {
    state.jenis_kelamin = value;
  },
  tanggal_lahir(state, value) {
    state.tanggal_lahir = value;
  },
  no_telphone(state, value) {
    state.no_telphone = value;
  },
  alamat(state, value) {
    state.alamat = value;
  },
  setDetail(state, row) {
    state.id = row.id;
    state.alamat = row.alamat;
    state.nama = row.nama;
    state.jenis_kelamin = row.jenis_kelamin;
    state.no_rm = row.no_rm;
    state.tanggal_lahir = row.tanggal_lahir;
    state.no_telphone = row.no_telphone;
  }
};
