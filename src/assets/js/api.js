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
  getPastLaunches(limit) {
    const query = {
      query: {
        upcoming: false,
      },
      options: {
        limit,
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
  getMostUsedCores() {
    const query = {
      query: {},
      options: {
        limit: 10,
        sort: {
          reuse_count: "Desc",
        },
        populate: ["launches"],
      },
    };
    return spaceXAPI.post("cores/query", query);
  },
  getShips() {
    const query = {
      query: {
        active: true,
      },
      options: {
        limit: 1,
      },
    };
    return spaceXAPI.post("ships/query", query);
  },
};
