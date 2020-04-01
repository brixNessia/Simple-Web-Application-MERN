import axios from "axios";

// create new instance
const Http = axios.create();

// set default config
Http.defaults.baseURL = process.env.REACT_APP_BACKEND_API_URL;
Http.defaults.headers.common.Accept = "*/*";
Http.defaults.headers["Content-Type"] = "application/json";

/**
 * intercept the response so we can handle the
 * expected exceptions from the API
 */
Http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    /**
     * This could be a CORS issue or
     * a dropped internet connection.
     */
    if (typeof error.response === "undefined") {
      return alert("A network error occurred.");
    }

    switch (error.response.status) {
      case 400:
        console.error(error.response.data.message);
        break;
      case 401:
        break;
      case 422:
        /**
         * Handle Validation Response
         */
        console.error("Please enter required items.");
        break;
      case 403:
      case 500:
      case 562:
      case 563:
      case 567:
      case 568:
      case 570:
        /**
         * Handle the exceptions when the server
         * responsds with error messages
         */

        if (error.response.data instanceof Blob) {
          console.error("The file does not exist.");
        } else {
          let message = error.response.data.message || error.response.data;
          if (!(message instanceof String)) {
            message = error.response.statusText;
          }
          console.error(message);
        }

        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default Http;
