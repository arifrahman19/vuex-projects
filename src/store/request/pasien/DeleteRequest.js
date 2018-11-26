import axios from "axios";
export default {
  inputs: {
    additionalProperties: false,
    type: "object",
    description: "query pencarian",
    required: ["nama"],
    properties: {
      nama: {
        description: "nama dari pasien yang di daftarkan",
        type: "string",
        maxLength: 50
      },
      page: {
        type: "number",
        minimum: 0
      },
      page_size: {
        type: "number",
        maximum: 1000
      }
    }
  },
  output: {
    success: {
      ok: {
        message: "tambah pasien berhasil"
      }
    },
    error: {
      not_found: {
        message: "halo ternyata",
        code: 87,
        description: " "
      }
    }
  },
  action: async (inputs, output) => {
    // axios
    //   .delete("/api/v1/pasien/delete", {
    //     params: {
    //       id: idPasien
    //     }
    //   })
    //   .then(function(response) {
    //     if (response.data.success) {
    //       resolve(response.data.message);
    //     } else {
    //       console.log(JSON.stringify("errroor " + response.data));
    //       reject(response.data.message);
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log("errror refreshhh" + JSON.stringify(error));
    //     reject("error");
    //   });
    axios
      .delete("/api/v1/pasien/delete", {
        params: {
          id: inputs.id
        }
      })
      .then(function(response) {
        if (response.data.success) {
          return output.success(response.data);
        } else {
          return output.error(response.data.message);
        }
      })
      .catch(function(error) {
        console.log(error);
        return output.error("error 3");
      });
  }
};
