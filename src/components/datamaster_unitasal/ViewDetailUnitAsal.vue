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
            <span class="el-dialog__title"><b>Detail Unit Asal</b></span>
            <button
              type="button"
              aria-label="Close"
              @click="close"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </header>
          <section class="modal-body" id="modalDescription">
            <el-row>
              <el-col :md="24">
                <el-col :md="24">
                  <el-col :md="6">Kode</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17"> {{ kode }} </el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Nama</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17"> {{ nama }} </el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Kelas</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17"> {{ kelas }} </el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Jenis</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17"> {{ jenis }} </el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Keterangan</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17"> {{ keterangan }} </el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Status</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17"> {{ status }} </el-col>
                </el-col>
              </el-col>
            </el-row>
          </section>
          <footer class="modal-footer">
            <span slot="footer" class="dialog-footer">
              <el-button @click="close">Tutup</el-button>
              <el-button
                @click="onSetdataEdit"
                type="warning"
                icon="el-icon-edit"
                >Edit</el-button
              >
            </span>
          </footer>
        </div>
        <!-- <modal ref="modal" v-show="dialogVisible" @close="closeModal"/> -->
      </div>
    </transition>
    <form-edit-unit-asal v-show="visibleEditAdd" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import FormEditUnitAsal from "@/components/datamaster_unitasal/FormEditUnitAsal";
export default {
  components: {
    FormEditUnitAsal
  },
  computed: {
    ...mapState({
      visibleDetail: state => state.ViewDetailUnitAsal.visibleDetail,
      visibleEditAdd: state => state.FormEditUnitAsal.visibleEditAdd,
      id: state => state.ViewDetailUnitAsal.id,
      kode: state => state.ViewDetailUnitAsal.kode,
      nama: state => state.ViewDetailUnitAsal.nama,
      kelas: state => state.ViewDetailUnitAsal.kelas,
      status: state => state.ViewDetailUnitAsal.status,
      keterangan: state => state.ViewDetailUnitAsal.keterangan,
      jenis: state => state.ViewDetailUnitAsal.jenis
    })
  },
  methods: {
    ...mapActions({
      showEdit: "FormEditUnitAsal/showEdit",
      showDetail: "ViewDetailUnitAsal/showDetail"
    }),
    ...mapMutations({
      setVisibleDetail: "ViewDetailUnitAsal/SET_VISIBLE_DETAIL",
      setDetail: "ViewDetailUnitAsal/SET_DETAIL",
      setVisibleEdit: "FormEditUnitAsal/SET_VISIBLE_EDIT",
      handlerEdit: "FormEditUnitAsal/HANDLER_EDIT"
    }),
    close() {
      this.setVisibleDetail = false;
      this.showDetail(false);
      console.log("Detail :" + this.setVisibleDetail);
      this.setDetail = {};
    },
    edit() {
      this.setVisibleEdit = true;
      this.showEdit(true);
      // if (this.visibleEditAdd === true) {
      //   this.close();
      // }
      console.log("state detail : " + this.visibleDetail);
      console.log("state edit : " + this.visibleEditAdd);
      // console.log("value :" + JSON.stringify(value));
      console.log("Edit :" + this.setVisibleEdit);

      // this.setDetail(value);
    },
    onSetdataEdit() {
      this.handlerEdit({
        id: this.id,
        kode: this.kode,
        nama: this.nama,
        kelas: this.kelas,
        status: this.status,
        keterangan: this.keterangan,
        jenis: this.jenis
      });
      console.log("cek id:" + this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
