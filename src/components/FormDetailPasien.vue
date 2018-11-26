<template>
  <div>
    <el-form label-position="left" style="padding: 20px" label-width="95px">
      <el-form-item label="No. RM">
        <el-input v-model="no_rm" disabled />
      </el-form-item>
      <el-form-item label="Nama">
        <el-input v-model="nama" disabled />
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select
          v-model="jenis_kelamin"
          disabled
          placeholder="pilih jenis kelamin"
        >
          <el-option label="Laki-Laki" value="L" />
          <el-option label="Perempuan" value="P" />
        </el-select>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-date-picker
          v-model="tanggal_lahir"
          disabled
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="Pick a date"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="No. Telhone">
        <el-input v-model="no_telphone" disabled />
      </el-form-item>
      <el-form-item label="alamat">
        <el-input v-model="alamat" disabled type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onEdit">Edit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  computed: {
    id: {
      get() {
        return this.$store.state.FormDetailPasien.id;
      }
    },
    no_rm: {
      get() {
        return this.$store.state.FormDetailPasien.no_rm;
      },
      set(value) {
        this.$store.commit("FormDetailPasien/no_rm", value);
      }
    },
    nama: {
      get() {
        return this.$store.state.FormDetailPasien.nama;
      },
      set(value) {
        this.$store.commit("FormDetailPasien/nama", value);
      }
    },
    jenis_kelamin: {
      get() {
        return this.$store.state.FormDetailPasien.jenis_kelamin;
      },
      set(value) {
        this.$store.commit("FormDetailPasien/jenis_kelamin", value);
      }
    },
    tanggal_lahir: {
      get() {
        return this.$store.state.FormDetailPasien.tanggal_lahir;
      },
      set(value) {
        this.$store.commit("FormDetailPasien/tanggal_lahir", value);
      }
    },
    no_telphone: {
      get() {
        return this.$store.state.FormDetailPasien.no_telphone;
      },
      set(value) {
        this.$store.commit("FormDetailPasien/no_telphone", value);
      }
    },
    alamat: {
      get() {
        return this.$store.state.FormDetailPasien.alamat;
      },
      set(value) {
        this.$store.commit("FormDetailPasien/alamat", value);
      }
    }
  },
  methods: {
    onEdit() {
      this.$store.commit("FormEditPasien/dialogVisible", true);
      this.$store.commit("FormEditPasien/id", this.id);
      this.$store.commit("FormEditPasien/no_rm", this.no_rm);
      this.$store.commit("FormEditPasien/nama", this.nama);
      this.$store.commit("FormEditPasien/jenis_kelamin", this.jenis_kelamin);
      this.$store.commit("FormEditPasien/tanggal_lahir", this.tanggal_lahir);
      this.$store.commit("FormEditPasien/no_telphone", this.no_telphone);
      this.$store.commit("FormEditPasien/alamat", this.alamat);
    }
  }
};
</script>
