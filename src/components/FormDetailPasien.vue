<template>
  <div>
    <el-form label-position="left" style="padding: 20px" label-width="95px">
      <el-form-item label="No. RM">
        <el-input :value="no_rm" disabled />
      </el-form-item>
      <el-form-item label="Nama">
        <el-input :value="nama" disabled />
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select
          :value="jenis_kelamin"
          disabled
          placeholder="pilih jenis kelamin"
        >
          <el-option label="Laki-Laki" value="L" />
          <el-option label="Perempuan" value="P" />
        </el-select>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-date-picker
          :value="tanggal_lahir"
          disabled
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="Pick a date"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input :value="no_telphone" disabled />
      </el-form-item>
      <el-form-item label="alamat">
        <el-input :value="alamat" disabled type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onEditPasien">Edit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      id: state => state.FormDetailPasien.id,
      no_rm: state => state.FormDetailPasien.no_rm,
      nama: state => state.FormDetailPasien.nama,
      jenis_kelamin: state => state.FormDetailPasien.jenis_kelamin,
      tanggal_lahir: state => state.FormDetailPasien.tanggal_lahir,
      no_telphone: state => state.FormDetailPasien.no_telphone,
      alamat: state => state.FormDetailPasien.alamat
    })
  },
  methods: {
    ...mapMutations({
      handlerEdit: "FormEditPasien/handlerEdit"
    }),
    onEditPasien() {
      this.handlerEdit({
        id: this.id,
        no_rm: this.no_rm,
        nama: this.nama,
        jenis_kelamin: this.jenis_kelamin,
        tanggal_lahir: this.tanggal_lahir,
        no_telphone: this.no_telphone,
        alamat: this.alamat
      });
    }
  }
};
</script>
