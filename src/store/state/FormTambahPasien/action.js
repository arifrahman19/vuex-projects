import CreateRequest from "../../request/pasien/createRequest";
import { request } from "../../config/helper/RequestConnector";
export default {
  create: request(CreateRequest)
};
