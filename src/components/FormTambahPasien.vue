<template>
  <el-dialog
    :visible.sync="dialogVisible"
    title="Tambah pasien"
    width="30%" >
    <el-form 
      v-loading="loadingForm"
      label-position="left" 
      label-width="95px">
      <el-form-item label="No. RM">
        <el-input v-model="no_rm"/>
      </el-form-item>
      <el-form-item label="Nama">
        <el-input v-model="nama"/>
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select 
          v-model="jenis_kelamin" 
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
          v-model="tanggal_lahir" 
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date" 
          placeholder="Pick a date" 
          style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input v-model="no_telphone"/>
      </el-form-item>
      <el-form-item label="alamat">
        <el-input 
          v-model="alamat" 
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
  computed: {
    loadingForm: {
      get() {
        return this.$store.state.FormTambahPasien.loadingForm;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/loadingForm", value);
      }
    },
    dialogVisible: {
      get() {
        return this.$store.state.FormTambahPasien.dialogVisible;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/dialogVisible", value);
      }
    },
    no_rm: {
      get() {
        return this.$store.state.FormTambahPasien.no_rm;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/no_rm", value);
      }
    },
    nama: {
      get() {
        return this.$store.state.FormTambahPasien.nama;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/nama", value);
      }
    },
    jenis_kelamin: {
      get() {
        return this.$store.state.FormTambahPasien.jenis_kelamin;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/jenis_kelamin", value);
      }
    },
    tanggal_lahir: {
      get() {
        return this.$store.state.FormTambahPasien.tanggal_lahir;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/tanggal_lahir", value);
      }
    },
    no_telphone: {
      get() {
        return this.$store.state.FormTambahPasien.no_telphone;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/no_telphone", value);
      }
    },
    alamat: {
      get() {
        return this.$store.state.FormTambahPasien.alamat;
      },
      set(value) {
        this.$store.commit("FormTambahPasien/alamat", value);
      }
    }
  },
  methods: {
    async onSubmit() {
      this.loadingForm = true;
      var respondRefresh = await this.$store.dispatch(
        "FormTambahPasien/create",
        {
          pasien: {
            no_rm: this.no_rm,
            nama: this.nama,
            jenis_kelamin: this.jenis_kelamin,
            tanggal_lahir: this.tanggal_lahir,
            no_telphone: this.no_telphone,
            alamat: this.alamat
          }
        }
      );
      this.loadingForm = false;
      this.dialogVisible = false;
      this.$store.commit("TablePasien/activeLoading");
      var respondRefresh = await this.$store.dispatch("TablePasien/filter", {
        name: "",
        page: this.$store.state.TablePasien.page - 1,
        page_size: this.$store.state.TablePasien.page_size
      });
      this.$store.commit("TablePasien/total", respondRefresh.properties.total);
      this.$store.commit("TablePasien/resetData", respondRefresh.payload);
      this.$store.commit("TablePasien/deactiveLoading");
    }
  }
};
</script>
