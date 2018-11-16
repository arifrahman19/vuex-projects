import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    edit_pasien: {
      id: null,
      no_rm: null,
      nama: null,
      jenis_kelamin: null,
      tanggal_lahir: null,
      no_telphone: null,
      alamat: null
    },
    detail_pasien: {
      id: null,
      no_rm: null,
      nama: null,
      jenis_kelamin: null,
      tanggal_lahir: null,
      no_telphone: null,
      alamat: null
    },
    pasiens: [
      {
        id: 12,
        nama: "budu",
        tanggal_lahir: "2016-05-03",
        alamat: "No. 189, Grove St, Los Angeles",
        no_rm: "1899",
        jenis_kelamin: "P",
        no_telphone: "085234185893",
        created: "",
        updated: ""
      }
    ]
  },
  getters: {
    getPasiens: state => {
      return state;
    }
  },
  mutations: {
    add: (state, pasien) => {
      state.pasiens.push(pasien);
    },
    empty: state => {
      state.pasiens = [];
    },
    changeAll: (state, pasiens) => {
      state.pasiens = pasiens;
    },
    setDetailPasien: (state, pasien) => {
      state.detail_pasien = pasien;
    }
  },
  actions: {
    editPasien: (context, pasien) => {
      return new Promise((resolve, reject) => {
        // alert(JSON.stringify(pasien));
        axios
          .put("/api/v1/pasien/edit", pasien, {
            params: {
              id: pasien.id
            }
          })
          .then(function(response) {
            if (response.data.success) {
              axios
                .get("/api/v1/pasien/filter?nama=&skip=1&limit=100", pasien)
                .then(function(response) {
                  if (response.data.success) {
                    context.commit("changeAll", response.data.payload);
                    return resolve();
                  } else {
                    return reject(JSON.stringify("error 4"));
                  }
                })
                .catch(function(error) {
                  console.log(error);
                  return reject("error 3");
                });
            } else {
              console.log("errror in state");
              return reject("error 2");
            }
          })
          .catch(function(error) {
            console.log(error);
            return reject("error 1");
          });
      });
    },
    setDetailPasien: (context, pasien) => {
      context.commit("setDetailPasien", pasien);
    },
    tambahPasien: (context, pasien) => {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/v1/pasien/create", pasien)
          .then(function(response) {
            if (response.data.success) {
              axios
                .get("/api/v1/pasien/filter?nama=&skip=1&limit=100", pasien)
                .then(function(response) {
                  if (response.data.success) {
                    context.commit("changeAll", response.data.payload);
                    return resolve();
                  } else {
                    return reject(JSON.stringify("error 4"));
                  }
                })
                .catch(function(error) {
                  console.log(error);
                  return reject("error 3");
                });
            } else {
              console.log("errror in state");
              return reject("error 2");
            }
          })
          .catch(function(error) {
            console.log(error);
            return reject("error 1");
          });
      });
    },
    refresh: context => {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/v1/pasien/filter?nama=&skip=1&limit=100")
          .then(function(response) {
            if (response.data.success) {
              context.commit("changeAll", response.data.payload);
              resolve(response.data.message);
            } else {
              reject(response.data.message);
            }
          })
          .catch(function(error) {
            console.log("errror refreshhh" + JSON.stringify(error));
            reject(error);
          });
      });
    },
    delete: async (context, idPasien) => {
      return new Promise((resolve, reject) => {
        axios
          .delete("/api/v1/pasien/delete", {
            params: {
              id: idPasien
            }
          })
          .then(function(response) {
            if (response.data.success) {
              resolve(response.data.message);
            } else {
              console.log(JSON.stringify("errroor " + response.data));
              reject(response.data.message);
            }
          })
          .catch(function(error) {
            console.log("errror refreshhh" + JSON.stringify(error));
            reject("error");
          });
      });
    }
  }
});
