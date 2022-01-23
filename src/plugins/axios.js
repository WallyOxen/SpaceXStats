import spaceXAPI from "@/assets/js/api.js";

export default {
  install(Vue) {
    if (Vue.prototype.$spaceXAPI) {
      throw new Error("$spaceXAPI already exists on the Vue prototype!");
    }
    Vue.prototype.$spaceXAPI = spaceXAPI;
  },
};
