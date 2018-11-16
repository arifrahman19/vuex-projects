import axios from "axios";

export default {
  registrasiPasien(context, pasien) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/v1/pasien/create", pasien)
        .then(function(response) {
          console.log(response);
          resolve();
        })
        .catch(function(error) {
          reject(error);
          console.log(error);
        });
      //   Vue.http
      //     .post("/api/user/shop/basket/post", { products: basket.products })
      //     .then(() => {
      //       context.commit("RESET_BASKET");
      //       resolve();
      //     })
      //     .catch(error => reject(error));
    });
  }
};
