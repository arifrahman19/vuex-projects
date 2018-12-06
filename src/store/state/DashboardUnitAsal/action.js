import axios from "axios";
import { resolve } from "path";
import { rejects } from "assert";

export default {
  loadUnitAsal: function(context, value) {
    // return new Promise(async (resolve, rejects) => {
    console.log("urutan action urutan 2");
    // console.log("halo unit asal");
    axios.get("/api/v1/unitasal/read?nama=&page=0&page_size=10").then(
      response => {
        console.log(JSON.stringify(response.data));
        var tmp = [];
        response.data.payload.forEach(unitAsal => {
          tmp.push({
            kode: unitAsal.kode,
            nama: unitAsal.nama,
            jenis: unitAsal.m_jenis_unit_asal_id.nama,
            kelas: unitAsal.kelas,
            keterangan: unitAsal.keterangan,
            status: unitAsal.status
          });
        });
        console.log("urutan action urutan 3");
        context.commit("SET_UNITASAL", tmp);
        console.log("urutan action urutan 4");
        resolve("oke");
      },
      err => {
        rejects(err);
        console.log(err);
      }
    );
    // });
  },
  cariUnitAsal: function(context, value) {},
  gantiHalaman: function(context, value) {}
};
