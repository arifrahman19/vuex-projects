<template>
  <div class="main-unitasal">
    <!-- search -->
    <el-col :md="24">
      <el-col :md="8" class="search">
        <el-input placeholder="Search..." class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-col>
    <!-- search -->
    <!-- title dan button -->
    <el-col :md="24" class="table-head">
      <el-col :md="12"> <h3 class="title-unit">Unit Asal</h3> </el-col>
      <el-col :md="12">
        <el-button
          round
          type="primary"
          icon="el-icon-plus"
          size="small"
          class="btn-tambah-unit"
          @click="setVisibleDialog(true);"
          >Tambah Data</el-button
        >
      </el-col>
    </el-col>
    <hr />
    <!-- title dan button -->
    <!-- table -->
    <el-col :md="24">
      <el-table :data="tableData" stripe class="table-unit" @row-click="detail">
        <el-table-column prop="kode" label="Kode Unit Asal" align="center">
        </el-table-column>
        <el-table-column prop="nama" label="Nama Unit asal" align="center">
        </el-table-column>
        <el-table-column prop="jenis" label="Jenis Unit Asal" align="center">
        </el-table-column>
        <el-table-column prop="kelas" label="Kelas" align="center">
        </el-table-column>
        <el-table-column prop="keterangan" label="Keterangan" align="center">
        </el-table-column>
        <el-table-column prop="status" label="Status" align="center">
        </el-table-column>
      </el-table>
    </el-col>
    <!--
      <el-dialog title="Tips" width="30%">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addCloseDialogAdd">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false;"
            >Confirm</el-button
          >
        </span>
      </el-dialog>
    -->
    <view-detail-unit-asal v-show="visibleDetail" />
    <form-input-unit-asal v-show="visibleDialogAdd" />
    <!-- <form-edit-unit-asal v-show="visibleDialogAdd" /> -->
    <!-- table -->
    <!--
      <el-col :md="24">
        <el-pagination
          :total="total"
          :page-size="page_size"
          :current-page="page"
          style="margin-top:10px; margin-left:15px; padding:0px"
          background
          layout="total, prev, pager, next"
          @current-change="handleChangePage"
        />
      </el-col>
    -->
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";
import FormInputUnitAsal from "@/components/datamaster_unitasal/FormInputUnitAsal";
import ViewDetailUnitAsal from "@/components/datamaster_unitasal/ViewDetailUnitAsal";
export default {
  // data() {
  //   return {
  //     showDialogAdd: false
  //   };
  // },
  components: {
    FormInputUnitAsal,
    ViewDetailUnitAsal
  },
  computed: {
    // tableData: function() {
    //   return [
    //     {
    //       created: "2018-12-05T12:21:40.000Z",
    //       updated: "2018-12-05T12:21:40.000Z",
    //       id: 2,
    //       nama: "Arofah",
    //       kode: "Arofah",
    //       kelas: "biasa",
    //       status: "aktif",
    //       keterangan: "-",
    //       m_jenis_unit_asal_id: {
    //         created: "2018-12-05T09:34:03.000Z",
    //         updated: "2018-12-05T09:34:03.000Z",
    //         id: 2,
    //         kode: "UGD",
    //         nama: "UGD",
    //         status: "aktif"
    //       }
    //     }
    //   ];
    // },
    ...mapState({
      visibleDetail: state => state.ViewDetailUnitAsal.visibleDetail,
      visibleEditAdd: state => state.FormEditUnitAsal.visibleEditAdd,
      visibleDialogAdd: state => state.FormInputUnitAsal.visibleDialogAdd,
      tableData: state => state.DashboardUnitAsal.unitasal,
      loadingData: state => state.DashboardUnitAsal.loadingData,
      total: state => state.DashboardUnitAsal.total,
      page: state => state.DashboardUnitAsal.page,
      page_size: state => state.DashboardUnitAsal.page_size
    })
  },
  methods: {
    ...mapActions({
      loadUnitAsal: "DashboardUnitAsal/loadUnitAsal",
      showDetail: "ViewDetailUnitAsal/showDetail"
    }),
    ...mapMutations({
      setVisibleDialog: "FormInputUnitAsal/SET_VISIBLE_DIALOG",
      setVisibleDetail: "ViewDetailUnitAsal/SET_VISIBLE_DETAIL",
      setDetail: "ViewDetailUnitAsal/SET_DETAIL"
    }),
    openDialog() {
      // this.setVisibleDialog(true);
      // this.visibleDialogAdd = true;
      // this.showDialogAdd = true;
      // console.log("openDialog : " + this.showDialogAdd);
    },
    addCloseDialogAdd() {
      this.showDialogAdd = false;
    },
    detail(value) {
      this.showDetail(true);
      this.setVisibleDetail = true;
      console.log("value :" + JSON.stringify(value));
      console.log(this.setVisibleDetail);
      this.setDetail(value);
    }
    // handleClose(done) {
    //   this.$confirm("Are you sure to close this dialog?")
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {});
    // }
    // async cariiii() {
    //   console.log("urutan 1");
    //   var p = await this.loadUnitAsal();
    //   console.log("urutan 5 " + p);
    //   this.$message.success("oke berhasil");
    // },
    // ...mapActions({
    //   loadUnitAsal: "DashboardUnitAsal/loadUnitAsal"
    // })
  },
  mounted() {
    this.loadUnitAsal();
    // this.$store.commit("DashboardUnitAsal/SET_UNITASAL", [
    //   {
    //     created: "2018-12-05T12:21:40.000Z",
    //     updated: "2018-12-05T12:21:40.000Z",
    //     id: 2,
    //     nama: "Arofah",
    //     kode: "Arofah",
    //     kelas: "biasa",
    //     status: "aktif",
    //     keterangan: "-",
    //     m_jenis_unit_asal_id: {
    //       created: "2018-12-05T09:34:03.000Z",
    //       updated: "2018-12-05T09:34:03.000Z",
    //       id: 2,
    //       kode: "UGD",
    //       nama: "UGD",
    //       status: "aktif"
    //     }
    //   }
    // ]);
    // this.loadUnitAsal();
    // axios
    //   .get("/api/v1/unitasal/read?nama=&page=0&page_size=10", {
    //     headers: { "Access-Control-Allow-Origin": "*" }
    //   })
    //   .then(response => {
    //     // if (response.data.success) {
    //     console.log(JSON.stringify(response.data.data));
    //     // }
    //   });
  }
};
</script>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
