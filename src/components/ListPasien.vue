<template>
  <div>
    <div align="center">  
      <h2>
        Table Pasien
      </h2>
    </div>
    <el-table
      v-loading="loadingForm"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadingForm: false
    };
  },
  computed: {
    tableData() {
      return this.$store.state.pasiens;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    rowClick: function(row, event, column) {
      if (column.label !== "Aksi") {
        this.$store.dispatch("setDetailPasien", row);
      }
    },
    handleEdit: async function(index, row) {
      this.$emit("edit", row);
    },
    handleDelete: async function(index, row) {
      console.log("row.id " + row.id);
      this.loadingForm = true;
      let message = this.$message;
      await this.$store
        .dispatch("delete", row.id)
        .then(function(result) {
          message.success(result);
        })
        .catch(function(error) {
          console.log("errroorr-----------  " + JSON.stringify(error));
          message.error(error);
        });

      this.$store
        .dispatch("refresh")
        .then(result => {
          this.$message.success("Add data success");
          this.loadingForm = false;
        })
        .catch(err => {
          this.$message.error(JSON.stringify(err));
          this.loadingForm = false;
        });
    }
  }
};
</script>
