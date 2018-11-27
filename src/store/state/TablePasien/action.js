import FilterRequest from "../../request/pasien/FilterRequest";
import DeleteRequest from "../../request/pasien/DeleteRequest";
import { Message } from "element-ui";
import { request2, requestHelper } from "../../config/helper/RequestConnector";
export default {
  delete: request2(async context => {
    try {
      context.commit("loadingData", true);
      await requestHelper(DeleteRequest, {
        id: context.inputs.id
      });
      await context.dispatch("refresh");
    } catch (error) {
      Message.error("Error " + error);
      context.commit("loadingData", false);
    }
  }),
  refresh: request2(async context => {
    context.commit("activeLoading");
    var respondRefresh = await requestHelper(FilterRequest, {
      name: "",
      page: context.state.page,
      page_size: context.state.page_size
    });
    context.commit("total", respondRefresh.properties.total);
    context.commit("resetData", respondRefresh.payload);
    context.commit("deactiveLoading");
  }),
  searchAction: request2(async context => {
    context.state.page = 1;
    context.dispatch("refresh");
  })
};
