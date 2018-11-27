<template>
  <div>
    <el-row>
      <el-col :span="2">
        <el-button circle size="small" type="primary" @click="refreshAction();">
          <i class="el-icon-refresh" />
        </el-button>
        <el-button
          circle
          size="small"
          type="primary"
          @click="handlerTambahPasien(true);"
        >
          <i class="el-icon-circle-plus-outline" />
        </el-button>
      </el-col>
      <el-col :span="7">
        <el-input
          :value="keyword"
          @input="updateKeyword"
          placeholder="Please input"
        >
          <el-button slot="append" icon="el-icon-search" @click="onSearch" />
        </el-input>
      </el-col>
      <el-col :span="4"> <div class="grid-content bg-purple" /> </el-col>
      <el-col :span="4"> <div class="grid-content bg-purple-light" /> </el-col>
      <el-col :span="4"> <div class="grid-content bg-purple" /> </el-col>
      <el-col :span="4"> <div class="grid-content bg-purple-light" /> </el-col>
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
