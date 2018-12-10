export default {
  //   SET_UNITASAL(state, unitasal) {
  //     console.log("set unit asal mutation");
  //     state.unitasal = unitasal;
  //   },

  // SET_VISIBLE_DIALOG(state, value) {
  //   console.log("set unit asal mutation");
  //   state.visibleDialogAdd = value;
  // }

  SET_VISIBLE_DETAIL(state, value) {
    state.visibleDetail = value;
  },
  id(state, value) {
    state.id = value;
  },
  kode(state, value) {
    state.kode = value;
  },
  nama(state, value) {
    state.nama = value;
  },
  kelas(state, value) {
    state.kelas = value;
  },
  status(state, value) {
    state.status = value;
  },
  keterangan(state, value) {
    state.keterangan = value;
  },
  jenis(state, value) {
    state.jenis = value;
  },
  SET_DETAIL(state, value) {
    state.id = value.id;
    state.kode = value.kode;
    state.nama = value.nama;
    state.kelas = value.kelas;
    state.status = value.status;
    state.keterangan = value.keterangan;
    state.jenis = value.jenis;
  }
};
