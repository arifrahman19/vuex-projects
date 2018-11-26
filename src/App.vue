<template>
  <div>
    <div align="center"><h2>Table Pasien</h2></div>
    <action-bar />
    <el-row>
      <el-col :span="16" style="padding-right:10px;padding-left:10px">
        <list-pasien @edit="onEditPasien" />
      </el-col>
      <el-col :span="8"> <form-detail-pasien @edit="onEditPasien" /> </el-col>
    </el-row>
    <form-tambah-pasien />
    <form-edit-pasien
      :dialog-visible.sync="open_dialog_edit_pasien"
      :pasien="pasienEdit"
    />
  </div>
</template>
<script>
import FormEditPasien from "@/components/FormEditPasien";
import ListPasien from "@/components/TablePasien";
import FormTambahPasien from "@/components/FormTambahPasien";
import FormDetailPasien from "@/components/FormDetailPasien";
import ActionBar from "@/components/ActionBar";
export default {
  components: {
    FormEditPasien,
    ListPasien,
    FormTambahPasien,
    FormDetailPasien,
    ActionBar
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
      open_dialog_edit_pasien: false
    };
  },
  methods: {
    tambah_pasien_event() {
      this.open_dialog_tambah_pasien = true;
    },
    onEditPasien(pasien) {
      this.pasienEdit = Object.assign({}, pasien);
      this.open_dialog_edit_pasien = true;
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
