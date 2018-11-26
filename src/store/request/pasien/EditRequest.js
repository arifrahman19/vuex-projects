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
    axios
      .put(
        "/api/v1/pasien/edit",
        {
          no_rm: inputs.no_rm,
          nama: inputs.nama,
          jenis_kelamin: inputs.jenis_kelamin,
          tanggal_lahir: inputs.tanggal_lahir,
          no_telphone: inputs.no_telphone,
          alamat: inputs.alamat
        },
        {
          params: {
            id: inputs.id
          }
        }
      )
      .then(function(response) {
        if (response.data.success) {
          return output.success(response.data);
        } else {
          return output.error(JSON.stringify("error 4"));
        }
      })
      .catch(function(error) {
        console.log(error);
        return output.error("error 3");
      });
  }
};
