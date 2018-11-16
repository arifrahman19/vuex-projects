<template>
  <div >
    <div align="center">
      <h2>Detail pasien</h2>
    </div>
    <el-form 
      v-loading="loadingForm"
      ref="form"
      :model="form"
      label-position="left" 
      style="padding: 20px" 
      label-width="95px">
      <el-form-item label="No. RM">
        <el-input 
          v-model="form.no_rm" 
          disabled/>
      </el-form-item>
      <el-form-item label="Nama">
        <el-input 
          v-model="form.nama" 
          disabled/>
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select 
          v-model="form.jenis_kelamin" 
          disabled
          placeholder="pilih jenis kelamin">
          <el-option 
            label="Laki-Laki" 
            value="L"/>
          <el-option 
            label="Perempuan" 
            value="P"/>
        </el-select>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-date-picker 
          v-model="form.tanggal_lahir"
          disabled 
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date" 
          placeholder="Pick a date" 
          style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input 
          v-model="form.no_telphone"
          disabled/>
      </el-form-item>
      <el-form-item label="alamat">
        <el-input 
          v-model="form.alamat" 
          disabled
          type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary" 
          @click="onEdit">Edit</el-button>
      </el-form-item>
    </el-form>
</div></template>
<script>
export default {
  data() {
    return {
      loadingForm: false,
      form1: {
        no_rm: null,
        nama: null,
        jenis_kelamin: null,
        tanggal_lahir: null,
        no_telphone: null,
        alamat: null
      }
    };
  },
  computed: {
    form() {
      return this.$store.state.detail_pasien;
    }
  },
  methods: {
    onEdit() {
      this.$emit("edit", this.$store.state.detail_pasien);
    }
  }
};
</script>
