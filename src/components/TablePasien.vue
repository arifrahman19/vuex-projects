<template>
  <div style="margin-top:20px">
    <el-table
      v-loading="loadingData"
      :data="tableData"
      border
      @row-click="rowClick"
    >
      <el-table-column prop="no_rm" label="No. RM" width="80" />
      <el-table-column prop="nama" label="Nama" width="130" />
      <el-table-column prop="tanggal_lahir" label="Tanggal lahir" width="110" />
      <el-table-column prop="jenis_kelamin" label="Jenis" width="60" />
      <el-table-column prop="alamat" label="Alamat" />
      <el-table-column prop="no_telphone" label="Telphone" />
      <el-table-column prop="created" label="created" width="80" />
      <el-table-column prop="updated" label="updated" width="80" />
      <el-table-column width="60" label="Aksi">
        <template slot-scope="scope">
          <el-button
            circle
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row);"
          >
            <i class="el-icon-delete" />
          </el-button>
          <el-button
            circle
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row);"
          >
            <i class="el-icon-edit" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :total="total"
      :page-size="page_size"
      :current-page="page"
      style="margin-top:10px; padding:0px"
      background
      layout="total, prev, pager, next"
      @current-change="handleChangePage"
    />
  </div>
</template>
<script>
import { commit } from "vuex";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      tableData: state => state.TablePasien.pasiens,
      loadingData: state => state.TablePasien.loadingData,
      page: state => state.TablePasien.page,
      total: state => state.TablePasien.total,
      page_size: state => state.TablePasien.page_size
    })
  },
  methods: {
    ...mapMutations({
      setTablePage: "TablePasien/page",
      setFormDetailPasien: "FormDetailPasien/setDetail",
      setFormEditPasien: "FormEditPasien/handlerEdit"
    }),
    ...mapActions({
      refreshTableAction: "TablePasien/refresh",
      deleteTableAction: "TablePasien/delete"
    }),
    handleChangePage(val) {
      this.setTablePage(val);
      this.refreshTableAction();
    },
    rowClick(row, event, column) {
      if (column.label !== "Aksi") {
        this.setFormDetailPasien(row);
      }
    },
    handleEdit(index, row) {
      this.setFormEditPasien(row);
    },
    handleDelete: async function(index, row) {
      this.deleteTableAction(row);
    }
  }
};
</script>
