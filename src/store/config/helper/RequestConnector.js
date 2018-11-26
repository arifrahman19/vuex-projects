export function request(request) {
  return function(context, inputs) {
    return new Promise((resolve, reject) => {
      var output = {
        success: function(value) {
          resolve(value);
        },
        error: function(value) {
          reject(value);
        }
      };
      return request.action(inputs, output);
    });
  };
}
