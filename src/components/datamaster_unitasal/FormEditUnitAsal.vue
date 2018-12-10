<template>
  <div>
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div
          class="modal-edit"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header class="modal-header" id="modalTitle">
            <span class="el-dialog__title"><b>Edit Unit Asal</b></span>

            <button
              @click="setVisibleEdit(false);"
              type="button"
              aria-label="Close"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </header>
          <section class="modal-body" id="modalDescription">
            <el-form label-width="120px">
              <el-form-item label="Kode">
                <el-input
                  :value="kode"
                  @input="setKode"
                  placeholder="input kode unit asal"
                ></el-input>
              </el-form-item>

              <el-form-item label="Nama">
                <el-input
                  :value="nama"
                  @input="setNama"
                  placeholder="input nama unit asal"
                ></el-input>
              </el-form-item>
              <el-form-item label="Jenis">
                <el-select
                  @input="setJenis"
                  :value="jenis"
                  placeholder="pilih jenis unit asal"
                >
                  <el-option
                    v-for="item in opsiJenis"
                    :key="item.id"
                    :label="item.nama"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Kelas">
                <el-input
                  :value="kelas"
                  @input="setKelas"
                  placeholder="input kelas unit asal"
                ></el-input>
              </el-form-item>
              <el-form-item label="Keterangan">
                <el-input
                  :value="keterangan"
                  @input="setKeterangan"
                  placeholder="input keterangan"
                ></el-input>
              </el-form-item>
              <el-form-item label="Status">
                <el-switch
                  :value="status"
                  @input="setStatus"
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
              <el-button @click="setVisibleEdit(false);">Tutup</el-button>

              <el-button @click="editUnitAsal" type="primary">
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
import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      visibleEditAdd: state => state.FormEditUnitAsal.visibleEditAdd,
      kode: state => state.FormEditUnitAsal.kode,
      nama: state => state.FormEditUnitAsal.nama,
      kelas: state => state.FormEditUnitAsal.kelas,
      status: state => state.FormEditUnitAsal.status,
      keterangan: state => state.FormEditUnitAsal.keterangan,
      jenis: state => state.FormEditUnitAsal.jenis,
      opsiJenis: state => state.FormInputUnitAsal.jenisUnitAsal
    })
  },
  methods: {
    ...mapActions({
      editUnitAsal: "FormEditUnitAsal/editUnitAsal",
      showEdit: "FormEditUnitAsal/showEdit",
      showJenis: "FormInputUnitAsal/showJenis"
    }),
    ...mapMutations({
      setVisibleEdit: "FormEditUnitAsal/SET_VISIBLE_EDIT",
      setKode: "FormEditUnitAsal/kode",
      setNama: "FormEditUnitAsal/nama",
      setKelas: "FormEditUnitAsal/kelas",
      setStatus: "FormEditUnitAsal/status",
      setKeterangan: "FormEditUnitAsal/keterangan",
      setJenis: "FormEditUnitAsal/jenis"
    })
  },
  mounted() {
    this.showJenis();
  }
};
</script>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
