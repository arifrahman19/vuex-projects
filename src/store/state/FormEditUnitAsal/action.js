import axios from "axios";
import { resolve } from "path";
import { rejects } from "assert";
import state from "../ViewDetailUnitAsal/state";

export default {
  //   loadUnitAsal: function(context, value) {
  //     // return new Promise(async (resolve, rejects) => {
  //     console.log("urutan action urutan 2");
  //     // console.log("halo unit asal");
  //     axios.get("/api/v1/unitasal/read?nama=&page=0&page_size=10").then(
  //       response => {
  //         console.log(JSON.stringify(response.data));
  //         var tmp = [];
  //         response.data.payload.forEach(unitAsal => {
  //           tmp.push({
  //             kode: unitAsal.kode,
  //             nama: unitAsal.nama,
  //             jenis: unitAsal.m_jenis_unit_asal_id.nama,
  //             kelas: unitAsal.kelas,
  //             keterangan: unitAsal.keterangan,
  //             status: unitAsal.status
  //           });
  //         });
  //         console.log("urutan action urutan 3");
  //         context.commit("SET_UNITASAL", tmp);
  //         console.log("urutan action urutan 4");
  //         resolve("oke");
  //       },
  //       err => {
  //         rejects(err);
  //         console.log(err);
  //       }
  //     );
  //     // });
  //   },

  //   createUnitAsal: function(context, form_unitasal) {
  //     console.log("action simpan 1");
  //     var data_unitasal = {
  //       kode: form_unitasal.kode,
  //       nama: form_unitasal.nama,
  //       kelas: form_unitasal.kelas,
  //       status: form_unitasal.status,
  //       keterangan: form_unitasal.keterangan,
  //       m_jenis_unit_asal_id: form_unitasal.jenis
  //     };
  //     axios.post("/api/v1/unitasal/create", data_unitasal).then(response => {
  //       console.log(JSON.stringify(response.data));
  //       console.log("data terkirim" + data_unitasal);
  //       console.log("action simpan 2");
  //       context.commit("DashboardUnitAsal/SET_UNITASAL", data_unitasal);
  //       console.log("action simpan 3");
  //       // resolve("oke");
  //       if (response.data.success === true) {
  //         context.commit("SET_VISIBLE_DIALOG", false);
  //         // this.$emit("closeDialogAdd");
  //       } else {
  //         console.log("data tidak succes");
  //       }
  //     }),
  //       err => {
  //         rejects(err);
  //         console.log(err);
  //       };
  //     // });
  //   },

  //   showDetail: function(context, value) {
  //     console.log("value action : " + value);
  //     context.commit("SET_VISIBLE_DETAIL", value);
  //   },
  editUnitAsal: function(context, value) {
    console.log("id : " + state.id);
    var edit_form = {
      kode: value.kode,
      nama: value.nama,
      kelas: value.kelas,
      status: value.status,
      keterangan: value.keterangan,
      m_jenis_unit_asal_id: value.jenis
    };
    console.log("edit form: " + JSON.stringify(edit_form));
    axios
      .put("api/v1/unitasal/edit?id=" + state.id, edit_form)
      .then(response => {
        console.log(JSON.stringify(response.data));
        console.log("data edit : " + JSON.stringify(edit_form));
        context.commit(
          "DashboardUnitAsal/SET_UNITASAL",
          JSON.stringify(edit_form)
        );
        if (response.data.success === true) {
          context.commit("SET_VISIBLE_EDIT", false);
        } else {
          console.log("data tidak succes");
        }
      }),
      err => {
        rejects(err);
        console.log(err);
      };
  }
  // showEdit: function(context, value) {
  //   console.log("value action edit : " + value);
  //   context.commit("SET_VISIBLE_EDIT", value);
  // }
};
