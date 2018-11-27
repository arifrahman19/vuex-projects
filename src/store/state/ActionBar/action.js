import FilterRequest from "../../request/pasien/FilterRequest";
import {
  request,
  request2,
  requestHelper
} from "../../config/helper/RequestConnector";
export default {
  find: request(FilterRequest),
  findAction: request2(async context => {
    context.rootCommit("TablePasien/activeLoading");
    var respondRefresh = await requestHelper(FilterRequest, {
      name: context.state.keyword,
      page: context.rootState.TablePasien.page,
      page_size: context.rootState.TablePasien.page_size
    });
    console.log(JSON.stringify(respondRefresh));
    context.rootCommit("TablePasien/total", respondRefresh.properties.total);
    context.rootCommit("TablePasien/resetData", respondRefresh.payload);
    context.rootCommit("TablePasien/deactiveLoading");
  })
};
