<template>
  <div class="navbar">
    <el-col :md="7">
      <el-input placeholder="search..." v-model="inputsearch">
        <el-button round slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-col>
    <el-col :md="5">
      <el-button round size="small" type="primary">Filter</el-button>
    </el-col>
    <el-col :md="12">
      <el-button round size="small" type="success">Terapkan</el-button>
      <el-date-picker
        type="daterange"
        align="right"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        default-value="2018-11-11"
      >
      </el-date-picker>
      <h4>Periode</h4>
    </el-col>
  </div>
</template>

<script>
import Navigation from "@/components/staf/Navigation";
export default {
  name: "Navigation"
};
</script>

<style>
.el-button--small.is-round {
  padding: 10px 20px;
  margin-inline-end: 50px;
  float: right;
}
.el-range-editor.el-input__inner {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 3px 10px;
  margin-inline-end: 10px;
  float: right;
}
h4 {
  display: block;
  margin-block-start: 10px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 10px;
  font-weight: bold;
  float: right;
}
.navbar {
  display: block;
  margin-bottom: 20px;
}
</style>
