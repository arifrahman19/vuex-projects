export default {
  dialogVisible(state, value) {
    state.dialogVisible = value;
  },
  loadingForm(state, value) {
    state.loadingForm = value;
  },
  id(state, value) {
    console.log("form set state value " + JSON.stringify(value));
    state.id = value;
  },
  no_rm(state, value) {
    console.log("form set state value " + JSON.stringify(value));
    state.no_rm = value;
  },
  nama(state, value) {
    console.log("form set state value " + JSON.stringify(value));
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
  }
};
