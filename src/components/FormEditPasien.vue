<template>
  <el-dialog
    :visible="dialogVisible"
    @update:visible="setDialogVisible"
    title="Edit pasien"
    width="30%"
  >
    <el-form v-loading="loadingForm" label-position="left" label-width="95px">
      <el-form-item label="No. RM">
        <el-input :value="no_rm" @input="setNoRM" />
      </el-form-item>
      <el-form-item label="Nama">
        <el-input :value="nama" @input="setNama" />
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select
          :value="jenis_kelamin"
          @input="setJenisKelamin"
          placeholder="pilih jenis kelamin"
        >
          <el-option label="Laki-Laki" value="L" />
          <el-option label="Perempuan" value="P" />
        </el-select>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-date-picker
          :value="tanggal_lahir"
          @input="setTanggalLahir"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="Pick a date"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input :value="no_telphone" @input="setNoTelphone" />
      </el-form-item>
      <el-form-item label="alamat">
        <el-input :value="alamat" @input="setAlamat" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSimpanEditPasien">Simpan</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapState("FormEditPasien", {
      loadingForm: state => state.loadingForm,
      dialogVisible: state => state.dialogVisible,
      id: state => state.id,
      no_rm: state => state.no_rm,
      nama: state => state.nama,
      jenis_kelamin: state => state.jenis_kelamin,
      tanggal_lahir: state => state.tanggal_lahir,
      no_telphone: state => state.no_telphone,
      alamat: state => state.alamat
    })
  },
  methods: {
    ...mapMutations("FormEditPasien", {
      setNoRM: "no_rm",
      setNama: "nama",
      setId: "id",
      setDialogVisible: "dialogVisible",
      setJenisKelamin: "jenis_kelamin",
      setTanggalLahir: "tanggal_lahir",
      setNoTelphone: "no_telphone",
      setAlamat: "alamat"
    }),
    ...mapActions({
      onSimpanEditPasien: "FormEditPasien/editPasienAction"
    })
  }
};
</script>
