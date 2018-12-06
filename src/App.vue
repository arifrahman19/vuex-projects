<template>
  <div>
    <el-col :md="4" class="sidebar"> <sidebar /> </el-col>
    <el-col :md="20" class="main"> <dashboard-unit-asal /> </el-col>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import DashboardUnitAsal from "./components/datamaster_unitasal/DashboardUnitAsal";
import FormInputUnitAsal from "./components/datamaster_unitasal/FormInputUnitAsal";
export default {
  components: {
    Sidebar,
    DashboardUnitAsal,
    FormInputUnitAsal
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
