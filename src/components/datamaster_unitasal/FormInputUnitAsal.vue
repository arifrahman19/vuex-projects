<template>
  <div>
    <!--
      <el-dialog title="Tips" width="30%">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeDialog">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false;"
            >Confirm</el-button
          >
        </span>
      </el-dialog>
    -->
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div
          class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header class="modal-header" id="modalTitle">
            <span class="el-dialog__title"><b>Cito</b></span>
            <button
              type="button"
              aria-label="Close"
              @click="closeDialog();"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </header>
          <section class="modal-body" id="modalDescription"></section>
          <footer class="modal-footer">
            <span slot="footer" class="dialog-footer">
              <el-button @click="closeDialog();">Tutup</el-button>

              <el-button type="primary" @click="closeDialog();">
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
export default {
  data() {
    return {
      closeDialogAdd: false
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialogAdd");
    }
    // openDialog() {
    //   this.dialogVisible = true;
    // },
    // handleClose(done) {
    //   this.$confirm("Are you sure to close this dialog?")
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {});
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
