export default {
  SET_UNITASAL(state, unitasal) {
    console.log("set unit asal mutation");
    state.unitasal = unitasal;
  },
  SET_VISIBLE_DIALOG(state, value) {
    console.log("set unit asal mutation");
    state.visibleDialogAdd = value;
  },
  SET_VISIBLE_DETAIL(state, value) {
    state.visibleDetail = value;
  }
};
