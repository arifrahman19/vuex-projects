<template>
  <div>
       
    <span>
      <el-button
        circle
        size="small"
        type="primary"
        @click="refresh()">
        <i class="el-icon-refresh"/>
      </el-button>
      <el-button
        circle
        size="small"
        type="primary"
        @click="tambah_pasien_event()" >
        <i class="el-icon-circle-plus-outline"/>
      </el-button>
    </span>    
    <el-row>
      <el-col 
        :span="16" 
        style="padding-right:10px;padding-left:10px">
        <list-pasien @edit="onEditPasien"/>
      </el-col>
      <el-col :span="8">
        <form-detail-pasien @edit="onEditPasien"/>
      </el-col>
    </el-row>
    <form-tambah-pasien :dialog-visible.sync="open_dialog_tambah_pasien"/>
    <form-edit-pasien 
      :dialog-visible.sync="open_dialog_edit_pasien" 
      :pasien="pasienEdit" />
  </div>
</template>
<script>
import FormEditPasien from "@/components/FormEditPasien";
import ListPasien from "@/components/ListPasien";
import FormTambahPasien from "@/components/FormTambahPasien";
import FormDetailPasien from "@/components/FormDetailPasien";
export default {
  components: {
    FormEditPasien,
    ListPasien,
    FormTambahPasien,
    FormDetailPasien
  },
  data() {
    return {
      pasienEdit: {
        id: null,
        no_rm: null,
        nama: null,
        jenis_kelamin: null,
        tanggal_lahir: null,
        no_telphone: null,
        alamat: null
      },
      open_dialog_edit_pasien: false,
      open_dialog_tambah_pasien: false,
      title: "Starter project with ESLint and Prettier integration"
    };
  },
  methods: {
    tambah_pasien_event() {
      this.open_dialog_tambah_pasien = true;
    },
    onEditPasien(pasien) {
      this.pasienEdit = Object.assign({}, pasien);
      this.open_dialog_edit_pasien = true;
    },
    refresh: function() {
      this.loadingForm = true;
      this.$store
        .dispatch("refresh")
        .then(result => {
          this.$message.success("Refresh success");
          this.loadingForm = false;
        })
        .catch(err => {
          this.$message.error(JSON.stringify(err));
          this.loadingForm = false;
        });
    }
  },
  template: {}
};
</script>

<style>
h1 {
  font-size: 36px;
  margin: 0 auto;
  width: 500px;
}
</style>
