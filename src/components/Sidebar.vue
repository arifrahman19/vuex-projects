<template>
  <div>
    <h3>Data Master</h3>
    <el-menu default-active="1" class="el-menu">
      <el-menu-item index="1" @click="loadUnitAsal">
        <i class="el-icon-setting"></i> <span>Unit Asal</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i> <span>Pasien</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i> <span>Alat</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i> <span>Dokter Pengirim</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i> <span>Kategori Nilai Rujukan</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i> <span>Kategori Pemeriksaan</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i> <span>Subkategori Pemeriksaan</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-setting"></i> <span>Item Pemeriksaan</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-setting"></i> <span>Pemeriksaan Lab</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-setting"></i> <span>Reagen</span>
      </el-menu-item>
      <el-menu-item index="11">
        <i class="el-icon-setting"></i> <span>Datalogger</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    // async cariiii() {
    //   console.log("urutan 1");
    //   var p = await this.loadUnitAsal();
    //   console.log("urutan 5 " + p);
    //   this.$message.success("oke berhasil");
    // },
    ...mapActions({
      loadUnitAsal: "DashboardUnitAsal/loadUnitAsal"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "./../style.scss";
</style>
