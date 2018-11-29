<template>
  <div style="margin-top:20px;">
    <el-table
      v-loading="loadingData"
      :data="tableData"
      border
      @row-click="rowClick"
      style="width: 100%"
    >
      <el-table-column prop="no_rm" label="No. RM" width="100" />
      <el-table-column prop="nama" label="Nama" width="130" />
      <el-table-column prop="tanggal_lahir" label="Tanggal lahir" width="110" />
      <el-table-column prop="jenis_kelamin" label="Jenis" width="60" />
      <el-table-column prop="alamat" label="Alamat" />
      <el-table-column prop="no_telphone" label="Telphone" />
      <el-table-column prop="created" label="created" width="80" />
      <el-table-column prop="updated" label="updated" width="80" />
      <el-table-column width="100" label="Aksi">
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
