import EditRequest from "../../request/pasien/EditRequest";
import { request } from "../../config/helper/RequestConnector";
export default {
  edit: request(EditRequest)
};
