import FilterRequest from "../../request/pasien/FilterRequest";
import { request } from "../../config/helper/RequestConnector";
export default {
  find: request(FilterRequest)
};
