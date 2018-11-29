<template>
  <div class="table-pasien">
    <el-button
      round
      size="small"
      style="float: right; padding: 7px 5px"
      type="primary"
      icon="el-icon-circle-plus-outline"
      @click="showRegistrasi;"
      >Tambah Pasien</el-button
    >
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="noLab" label="No. Lab" />
      <el-table-column prop="noRm" label="No. RM" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="noRegRs" label="No. Reg RS" />
      <el-table-column prop="tglRegLab" label="Tanggal Reg Lab" />
      <el-table-column prop="statusPeriksa" label="Status Periksa" />
      <el-table-column prop="statusVerifikasi" label="Status Verifikasi" />
    </el-table>
    <!-- <tambah-registrasi v-show="(dialogVisible = true)" /> -->
  </div>
</template>

<script>
import TambahRegistrasi from "@/components/staf/TambahRegistrasi";
import Dashboard from "@/components/staf/Dashboard";
export default {
  components: {
    TambahRegistrasi
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          noLab: "201810110001",
          noRm: "1234",
          name: "Agus Yuwono",
          noRegRs: "90123",
          tglRegLab: "11-10-2018",
          statusPeriksa: "Belum Diperiksa",
          statusVerifikasi: "Belum Acc"
        },
        {
          noLab: "201810110001",
          noRm: "1234",
          name: "Agus Yuwono",
          noRegRs: "90123",
          tglRegLab: "11-10-2018",
          statusPeriksa: "Belum Diperiksa",
          statusVerifikasi: "Belum Acc"
        },
        {
          noLab: "201810110001",
          noRm: "1234",
          name: "Agus Yuwono",
          noRegRs: "90123",
          tglRegLab: "11-10-2018",
          statusPeriksa: "Belum Diperiksa",
          statusVerifikasi: "Belum Acc"
        },
        {
          noLab: "201810110001",
          noRm: "1234",
          name: "Agus Yuwono",
          noRegRs: "90123",
          tglRegLab: "11-10-2018",
          statusPeriksa: "Belum Diperiksa",
          statusVerifikasi: "Belum Acc"
        },
        {
          noLab: "201810110001",
          noRm: "1234",
          name: "Agus Yuwono",
          noRegRs: "90123",
          tglRegLab: "11-10-2018",
          statusPeriksa: "Belum Diperiksa",
          statusVerifikasi: "Belum Acc"
        }
      ]
    };
  },
  method: {
    showRegistrasi() {
      this.dialogVisible = true;
      console.log("showRegistrasi");
    }
  }
};
</script>

<style>
div.table-pasien {
  padding: 20px;
}
</style>
