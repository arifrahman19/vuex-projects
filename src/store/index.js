import Vue from "vue";
import Vuex from "vuex";
import DashboardUnitAsal from "./state/DashboardUnitAsal/module";
import FormInputUnitAsal from "./state/FormInputUnitAsal/module";
import FormEditUnitAsal from "./state/FormEditUnitAsal/module";
import ViewDetailUnitAsal from "./state/ViewDetailUnitAsal/module";
import TablePasien from "./state/TablePasien/module";
import FormTambahPasien from "./state/FormTambahPasien/module";
import FormEditPasien from "./state/FormEditPasien/module";
import FormDetailPasien from "./state/FormDetailPasien/module";
import ActionBar from "./state/ActionBar/module";
import Axios from "axios";

Vue.use(Vuex);
Vue.use(Axios);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    DashboardUnitAsal: DashboardUnitAsal,
    FormInputUnitAsal: FormInputUnitAsal,
    FormEditUnitAsal: FormEditUnitAsal,
    ViewDetailUnitAsal: ViewDetailUnitAsal,
    TablePasien: TablePasien,
    FormTambahPasien: FormTambahPasien,
    FormEditPasien: FormEditPasien,
    FormDetailPasien: FormDetailPasien,
    ActionBar: ActionBar
  }
});
