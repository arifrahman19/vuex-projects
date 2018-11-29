<template>
  <div>
    <el-row>
      <el-col :md="20" :xs="24" :sm="12" style="text-align:center">
        <el-input
          :value="keyword"
          @input="updateKeyword"
          placeholder="Please input"
        >
          <el-button slot="append" icon="el-icon-search" @click="onSearch" />
        </el-input>
      </el-col>
      <el-col :md="4" :xs="24" :sm="12">
        <el-button
          round
          size="medium"
          type="primary"
          style="float: right"
          @click="handlerTambahPasien(true);"
        >
          <i class="el-icon-circle-plus-outline" /> Tambah Pasien
        </el-button>
        <el-button round size="medium" type="primary" @click="refreshAction();">
          <i class="el-icon-refresh" />
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      keyword: state => state.ActionBar.keyword
    })
  },
  methods: {
    ...mapMutations({
      updateKeyword: "ActionBar/keyword",
      handlerTambahPasien: "FormTambahPasien/dialogVisible"
    }),
    ...mapActions({
      refreshAction: "TablePasien/refresh", // map `this.add()` to `this.$store.dispatch('increment')`,
      onSearch: "TablePasien/searchAction"
    })
  }
};
</script>

<style>
.el-input-group {
  width: 50% !important;
  text-align: center;
}
</style>
