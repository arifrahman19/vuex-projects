<template>
  <el-dialog :visible.sync="dialogVisible" title="Edit pasien" width="30%">
    <el-form v-loading="loadingForm" label-position="left" label-width="95px">
      <el-form-item label="No. RM"> <el-input v-model="no_rm" /> </el-form-item>
      <el-form-item label="Nama"> <el-input v-model="nama" /> </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select v-model="jenis_kelamin" placeholder="pilih jenis kelamin">
          <el-option label="Laki-Laki" value="L" />
          <el-option label="Perempuan" value="P" />
        </el-select>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-date-picker
          v-model="tanggal_lahir"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="Pick a date"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input v-model="no_telphone" />
      </el-form-item>
      <el-form-item label="alamat">
        <el-input v-model="alamat" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Simpan</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  // props: {
  // dialogVisible: {
  //   type: Boolean,
  //   required: true
  // },
  // pasien: {
  //   type: Object,
  //   required: true
  // }
  // },
  data() {
    return {
      // loadingForm: false
    };
  },
  computed: {
    loadingForm: {
      get() {
        return this.$store.state.FormEditPasien.loadingForm;
      },
      set(value) {
        this.$store.commit("FormEditPasien/loadingForm", value);
      }
    },
    dialogVisible: {
      get() {
        return this.$store.state.FormEditPasien.dialogVisible;
      },
      set(value) {
        this.$store.commit("FormEditPasien/dialogVisible", value);
      }
    },
    id: {
      get() {
        return this.$store.state.FormEditPasien.id;
      }
    },
    no_rm: {
      get() {
        return this.$store.state.FormEditPasien.no_rm;
      },
      set(value) {
        this.$store.commit("FormEditPasien/no_rm", value);
      }
    },
    nama: {
      get() {
        return this.$store.state.FormEditPasien.nama;
      },
      set(value) {
        this.$store.commit("FormEditPasien/nama", value);
      }
    },
    jenis_kelamin: {
      get() {
        return this.$store.state.FormEditPasien.jenis_kelamin;
      },
      set(value) {
        this.$store.commit("FormEditPasien/jenis_kelamin", value);
      }
    },
    tanggal_lahir: {
      get() {
        return this.$store.state.FormEditPasien.tanggal_lahir;
      },
      set(value) {
        this.$store.commit("FormEditPasien/tanggal_lahir", value);
      }
    },
    no_telphone: {
      get() {
        return this.$store.state.FormEditPasien.no_telphone;
      },
      set(value) {
        this.$store.commit("FormEditPasien/no_telphone", value);
      }
    },
    alamat: {
      get() {
        return this.$store.state.FormEditPasien.alamat;
      },
      set(value) {
        this.$store.commit("FormEditPasien/alamat", value);
      }
    }
  },
  methods: {
    async onSubmit() {
      this.loadingForm = true;
      try {
        var respond = await this.$store.dispatch("FormEditPasien/edit", {
          id: this.id,
          no_rm: this.no_rm,
          nama: this.nama,
          jenis_kelamin: this.jenis_kelamin,
          tanggal_lahir: this.tanggal_lahir,
          no_telphone: this.no_telphone,
          alamat: this.alamat
        });
      } catch (error) {
        this.$message.error("error edit " + error);
      }
      this.loadingForm = false;
      this.dialogVisible = false;
    }
  }
};
</script>
