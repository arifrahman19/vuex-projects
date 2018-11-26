import FilterRequest from "../../request/pasien/FilterRequest";
import DeleteRequest from "../../request/pasien/DeleteRequest";
import { request } from "../../config/helper/RequestConnector";
export default {
  filter: request(FilterRequest),
  delete: request(DeleteRequest)
};

// function helper(component, inputs) {
//   return new Promise((resolve, reject) => {
//     var output = {
//       success: function(value) {
//         // component.output
//         resolve(value);
//       },
//       error: function(value) {
//         reject(value);
//       }
//     };
//     return component.action(inputs, output);
//   });
// }
// function target(request) {
//   return function(context, inputs) {
//     return helper(request, inputs);
//   };
// }
