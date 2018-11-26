<template>
  <div style="margin-top:20px">
    <el-table
      v-loading="loadingData"
      :data="tableData"
      border
      @row-click="rowClick">
      <el-table-column
        prop="no_rm"
        label="No. RM"
        width="80"
      />
      <el-table-column
        prop="nama"
        label="Nama"
        width="130"/>
      <el-table-column
        prop="tanggal_lahir"
        label="Tanggal lahir"
        width="110"
      />
      <el-table-column
        prop="jenis_kelamin"
        label="Jenis"
        width="60"
      />
      <el-table-column
        prop="alamat"
        label="Alamat"/>
      <el-table-column
        prop="no_telphone"
        label="Telphone"/>
      <el-table-column
        prop="created"
        label="created"
        width="80"
      />
      <el-table-column
        prop="updated"
        label="updated"
        width="80"
      />
      <el-table-column
        width="60"
        label="Aksi">
        <template slot-scope="scope">
          <el-button
            circle
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"/>
          </el-button>
          <el-button
            circle
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"/>
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination      
      :total="total"
      :page-size="page_size"
      :current-page.sync="page"
      style="margin-top:10px; padding:0px"
      background
      layout="total, prev, pager, next"
      @current-change="handleChangePage"/>
  </div>
</template>
<script>
export default {
  computed: {
    tableData: {
      get() {
        return this.$store.state.TablePasien.pasiens;
      }
    },
    loadingData: {
      get() {
        return this.$store.state.TablePasien.loadingData;
      }
    },
    page: {
      get() {
        return this.$store.state.TablePasien.page;
      },
      set(value) {
        this.$store.commit("TablePasien/page", value);
      }
    },
    total: {
      get() {
        return this.$store.state.TablePasien.total;
      }
    },
    page_size: {
      get() {
        return this.$store.state.TablePasien.page_size;
      }
    }
  },
  methods: {
    async handleChangePage(val) {
      this.$store.commit("TablePasien/activeLoading");
      var respondRefresh = await this.$store.dispatch("TablePasien/filter", {
        name: "",
        page: this.page - 1,
        page_size: this.page_size
      });
      this.$store.commit("TablePasien/total", respondRefresh.properties.total);
      this.$store.commit("TablePasien/resetData", respondRefresh.payload);
      this.$store.commit("TablePasien/deactiveLoading");
    },
    rowClick: function(row, event, column) {
      if (column.label !== "Aksi") {
        // this.$store.dispatch("setDetailPasien", row);
        this.$store.commit("FormDetailPasien/id", row.id);
        this.$store.commit("FormDetailPasien/no_rm", row.no_rm);
        this.$store.commit("FormDetailPasien/nama", row.nama);
        this.$store.commit("FormDetailPasien/jenis_kelamin", row.jenis_kelamin);
        this.$store.commit("FormDetailPasien/tanggal_lahir", row.tanggal_lahir);
        this.$store.commit("FormDetailPasien/no_telphone", row.no_telphone);
        this.$store.commit("FormDetailPasien/alamat", row.alamat);
      }
    },
    handleEdit: async function(index, row) {
      // this.$emit("edit", row);
      this.$store.commit("FormEditPasien/dialogVisible", true);
      this.$store.commit("FormEditPasien/id", row.id);
      this.$store.commit("FormEditPasien/no_rm", row.no_rm);
      this.$store.commit("FormEditPasien/nama", row.nama);
      this.$store.commit("FormEditPasien/jenis_kelamin", row.jenis_kelamin);
      this.$store.commit("FormEditPasien/tanggal_lahir", row.tanggal_lahir);
      this.$store.commit("FormEditPasien/no_telphone", row.no_telphone);
      this.$store.commit("FormEditPasien/alamat", row.alamat);
    },
    handleDelete: async function(index, row) {
      // console.log("row.id " + row.id);
      this.loadingData = true;
      try {
        var respondRefresh = await this.$store.dispatch("TablePasien/delete", {
          id: row.id
        });
        var respondRefresh = await this.$store.dispatch("TablePasien/filter", {
          name: "",
          page: this.page - 1,
          page_size: this.page_size
        });
        this.$store.commit(
          "TablePasien/total",
          respondRefresh.properties.total
        );
        this.$store.commit("TablePasien/resetData", respondRefresh.payload);
      } catch (error) {
        this.$message.error("gagal " + error);
      }
      // let message = this.$message;
      // await this.$store
      //   .dispatch("delete", row.id)
      //   .then(function(result) {
      //     message.success(result);
      //   })
      //   .catch(function(error) {
      //     console.log("errroorr-----------  " + JSON.stringify(error));
      //     message.error(error);
      //   });
      // this.$store
      //   .dispatch("refresh")
      //   .then(result => {
      //     this.$message.success("Add data success");
      //     this.loadingForm = false;
      //   })
      //   .catch(err => {
      //     this.$message.error(JSON.stringify(err));
      this.loadingData = false;
      //   });
    }
  }
};
</script>
