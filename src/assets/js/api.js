const Axios = require("axios");

const spaceXAPI = Axios.create({
  baseURL: "https://api.spacexdata.com/v4",
  timeout: 1000,
});

spaceXAPI.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  lastLaunch() {
    return spaceXAPI.get("launches/latest");
  },
};
