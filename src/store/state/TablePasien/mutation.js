export default {
  resetData(state, data) {
    state.pasiens = data;
  },
  activeLoading(state) {
    state.loadingData = true;
  },
  deactiveLoading(state) {
    state.loadingData = false;
  },
  loadingData(state, value) {
    console.log("loading data" + value);
    state.loadingData = value;
  },
  total(state, value) {
    state.total = value;
  },
  page(state, value) {
    state.page = value;
  },
  limit(state, value) {
    state.limit = value;
  }
};
