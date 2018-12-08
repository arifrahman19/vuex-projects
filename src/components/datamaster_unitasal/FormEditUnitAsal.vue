<template>
  <div>
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div
          class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header class="modal-header" id="modalTitle">
            <span class="el-dialog__title"><b>Edit Unit Asal</b></span>
            <button
              type="button"
              aria-label="Close"
              @click="closeDialog();"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </header>
          <section class="modal-body" id="modalDescription">
            <el-form :model="form_unitasal" label-width="120px">
              <el-form-item label="Kode">
                <el-input
                  v-model="form_unitasal.kode"
                  placeholder="input kode unit asal"
                ></el-input>
              </el-form-item>
              <el-form-item label="Nama">
                <el-input
                  v-model="form_unitasal.nama"
                  placeholder="input nama unit asal"
                ></el-input>
              </el-form-item>
              <el-form-item label="Jenis">
                <el-select
                  v-model="form_unitasal.jenis"
                  placeholder="pilih jenis unit asal"
                >
                  <el-option
                    v-for="item in jenisUnitAsal"
                    :key="item.id"
                    :label="item.nama"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Kelas">
                <el-input
                  v-model="form_unitasal.kelas"
                  placeholder="input kelas unit asal"
                ></el-input>
              </el-form-item>
              <el-form-item label="Keterangan">
                <el-input
                  v-model="form_unitasal.keterangan"
                  placeholder="input keterangan"
                ></el-input>
              </el-form-item>
              <el-form-item label="Status">
                <el-switch
                  v-model="form_unitasal.status"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-value="aktif"
                  inactive-value="nonaktif"
                >
                </el-switch>
              </el-form-item>
            </el-form>
          </section>
          <footer class="modal-footer">
            <span slot="footer" class="dialog-footer">
              <el-button @click="closeDialog();">Tutup</el-button>

              <el-button type="primary" @click="create(form_unitasal);">
                Simpan</el-button
              >
            </span>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import axios from "axios";
// import { mapState, mapMutations, mapActions } from "vuex";
// export default {
//   data() {
//     return {
//       closeDialogAdd: false,
//       form_unitasal: {
//         kode: "",
//         nama: "",
//         jenis: "",
//         kelas: "",
//         keterangan: "",
//         status: ""
//       },
//       jenisUnitAsal: []
//     };
//   },
//   methods: {
//     ...mapActions({
//       create: "DashboardUnitAsal/createUnitAsal"
//     }),
//     closeDialog() {
//       this.$emit("closeDialogAdd");
//     }
//     // openDialog() {
//     //   this.dialogVisible = true;
//     // },
//     // handleClose(done) {
//     //   this.$confirm("Are you sure to close this dialog?")
//     //     .then(_ => {
//     //       done();
//     //     })
//     //     .catch(_ => {});
//     // }
//   },
//   mounted() {
//     axios
//       .get("/api/v1/jenis_unit_asal/read?nama=&page=0&page_size=20")
//       .then(response => {
//         console.log(JSON.stringify(response.data));
//         response.data.payload.forEach(jenis => {
//           this.jenisUnitAsal.push({
//             id: jenis.id,
//             kode: jenis.kode,
//             nama: jenis.nama,
//             status: jenis.status
//           });
//         });
//       });
//   }
// };
</script>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
