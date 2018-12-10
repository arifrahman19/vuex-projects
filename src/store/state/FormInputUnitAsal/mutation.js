export default {
  //   SET_UNITASAL(state, unitasal) {
  //     console.log("set unit asal mutation");
  //     state.unitasal = unitasal;
  //   },
  SET_VISIBLE_DIALOG(state, value) {
    console.log("set unit asal mutation");
    state.visibleDialogAdd = value;
  },
  SET_JENIS(state, value) {
    console.log("value jenis : " + JSON.stringify(value));
    state.jenisUnitAsal = value;
  }
  //   SET_VISIBLE_DETAIL(state, value) {
  //     state.visibleDetail = value;
  //   }
};
