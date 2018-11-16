<template>
  <el-dialog
    :visible="dialogVisible"
    title="Edit pasien"
    width="30%"
    @update:visible="$emit('update:dialogVisible', $event)">
    <el-form 
      v-loading="loadingForm"
      ref="pasien"
      :model="pasien"
      label-position="left" 
      label-width="95px">
      <el-form-item label="No. RM">
        <el-input v-model="pasien.no_rm"/>
      </el-form-item>
      <el-form-item label="Nama">
        <el-input v-model="pasien.nama"/>
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select 
          v-model="pasien.jenis_kelamin" 
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
          v-model="pasien.tanggal_lahir" 
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date" 
          placeholder="Pick a date" 
          style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input v-model="pasien.no_telphone"/>
      </el-form-item>
      <el-form-item label="alamat">
        <el-input 
          v-model="pasien.alamat" 
          type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary" 
          @click="onSubmit">Simpan</el-button>
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
    },
    pasien: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loadingForm: false
    };
  },
  methods: {
    onSubmit() {
      this.loadingForm = true;
      this.$store
        .dispatch("editPasien", this.pasien)
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
