import Vue from "vue";
import Vuex from "vuex";
import TablePasien from "./state/TablePasien/module";
import FormTambahPasien from "./state/FormTambahPasien/module";
import FormEditPasien from "./state/FormEditPasien/module";
import FormDetailPasien from "./state/FormDetailPasien/module";
import ActionBar from "./state/ActionBar/module";
Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    TablePasien: TablePasien,
    FormTambahPasien: FormTambahPasien,
    FormEditPasien: FormEditPasien,
    FormDetailPasien: FormDetailPasien,
    ActionBar: ActionBar
  }
});
