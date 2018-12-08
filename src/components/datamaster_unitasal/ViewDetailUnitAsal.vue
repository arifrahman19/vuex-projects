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
                  <el-col :md="17">AAA123</el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Nama</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17">Ar Rahman</el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Jenis</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17">UGD</el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Jenis</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17">UGD</el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Kelas</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17">VIP</el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Keterangan</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17">Bagus</el-col>
                </el-col>

                <el-col :md="24">
                  <el-col :md="6">Status</el-col>
                  <el-col :md="1"> : </el-col>
                  <el-col :md="17">Aktif</el-col>
                </el-col>
              </el-col>
            </el-row>
          </section>
          <footer class="modal-footer">
            <span slot="footer" class="dialog-footer">
              <el-button>Tutup</el-button>
              <el-button type="warning" icon="el-icon-edit">Edit</el-button>
            </span>
          </footer>
        </div>
        <!-- <modal ref="modal" v-show="dialogVisible" @close="closeModal"/> -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
