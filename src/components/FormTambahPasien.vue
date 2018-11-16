<template>
  <el-dialog
    :visible="dialogVisible"
    title="Tambah pasien"
    width="30%"
    @update:visible="$emit('update:dialogVisible', $event)">
    <el-form 
      v-loading="loadingForm"
      ref="form"
      :model="form"
      label-position="left" 
      label-width="95px">
      <el-form-item label="No. RM">
        <el-input v-model="form.no_rm"/>
      </el-form-item>
      <el-form-item label="Nama">
        <el-input v-model="form.nama"/>
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select 
          v-model="form.jenis_kelamin" 
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
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date" 
          placeholder="Pick a date" 
          style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input v-model="form.no_telphone"/>
      </el-form-item>
      <el-form-item label="alamat">
        <el-input 
          v-model="form.alamat" 
          type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary" 
          @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loadingForm: false,
      form: {
        no_rm: null,
        nama: null,
        jenis_kelamin: null,
        tanggal_lahir: null,
        no_telphone: null,
        alamat: null
      }
    };
  },
  methods: {
    onSubmit() {
      this.loadingForm = true;
      this.$store
        .dispatch("tambahPasien", this.form)
        .then(result => {
          this.$message.success("Add data success");
          console.log("result: ", result);
          this.loadingForm = false;
        })
        .catch(error => {
          this.$message.error(JSON.stringify(error));
          console.log("error: ", error);
          this.loadingForm = false;
        });
    }
  }
};
</script>
