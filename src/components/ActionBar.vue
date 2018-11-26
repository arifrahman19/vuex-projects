<template>
  <div>
    <el-row>
      <el-col :span="2">
        <el-button circle size="small" type="primary" @click="refresh();">
          <i class="el-icon-refresh" />
        </el-button>
        <el-button
          circle
          size="small"
          type="primary"
          @click="handlerTambahPasien();"
        >
          <i class="el-icon-circle-plus-outline" />
        </el-button>
      </el-col>
      <el-col :span="7">
        <el-input v-model="keyword" placeholder="Please input">
          <el-button slot="append" icon="el-icon-search" @click="find" />
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
export default {
  methods: {
    computed: {
      keyword: {
        get() {
          return this.$store.state.ActionBar.keyword;
        },
        set(value) {
          return this.$store.commit("ActionBar/keyword", value);
        }
      }
    },
    refresh: async function() {
      try {
        this.$store.commit("TablePasien/loadingData", true);
        var respondRefresh = await this.$store.dispatch("TablePasien/filter", {
          name: "",
          page: this.$store.state.TablePasien.page - 1,
          page_size: this.$store.state.TablePasien.page_size
        });
        this.$store.commit(
          "TablePasien/total",
          respondRefresh.properties.total
        );
        this.$store.commit("TablePasien/resetData", respondRefresh.payload);
        this.$store.commit("TablePasien/loadingData", false);
      } catch (error) {
        this.$store.commit("TablePasien/loadingData", false);
        this.$message.error("Error " + error);
      }
    },
    handlerTambahPasien: async function() {
      this.$store.commit("FormTambahPasien/dialogVisible", true);
    },
    find: async function() {
      this.$store.commit("TablePasien/activeLoading");
      var respondRefresh = await this.$store.dispatch("ActionBar/find", {
        name: this.keyword,
        page: 0,
        page_size: this.$store.state.TablePasien.page_size
      });
      this.$store.commit("TablePasien/total", respondRefresh.properties.total);
      this.$store.commit("TablePasien/resetData", respondRefresh.payload);
      this.$store.commit("TablePasien/deactiveLoading");
    }
  }
};
</script>
