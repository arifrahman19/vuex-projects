import CreateRequest from "../../request/pasien/createRequest";
import {
  request,
  request2,
  requestHelper
} from "../../config/helper/RequestConnector";
export default {
  tambahPasienAction: request2(async context => {
    context.commit("loadingForm", true);
    try {
      var respondRefresh = await requestHelper(CreateRequest, {
        pasien: {
          no_rm: context.state.no_rm,
          nama: context.state.nama,
          jenis_kelamin: context.state.jenis_kelamin,
          tanggal_lahir: context.state.tanggal_lahir,
          no_telphone: context.state.no_telphone,
          alamat: context.state.alamat
        }
      });
      context.rootDispatch("TablePasien/refresh");
    } catch (error) {}
    console.log(JSON.stringify(respondRefresh));
    context.commit("loadingForm", false);
    context.commit("dialogVisible", false);
  })
};
