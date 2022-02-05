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
  getCompanyData() {
    return spaceXAPI.get("company");
  },
  getLastLaunch() {
    const query = {
      query: {
        upcoming: false,
      },
      options: {
        limit: 1,
        sort: {
          flight_number: "Desc",
        },
        populate: [
          {
            path: "cores",
            populate: [
              {
                path: "landpad",
                select: ["full_name"],
              },
            ],
          },
          {
            path: "launchpad",
            select: {
              name: 1,
            },
          },
          "payloads",
          "rocket",
          "ships",
        ],
      },
    };
    return spaceXAPI.post("launches/query", query);
  },
};
