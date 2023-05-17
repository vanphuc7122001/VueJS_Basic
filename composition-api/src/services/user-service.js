import axios from "./customize-axios";

const resource = "/users";

export default {
  async get() {
    return await axios.get(`${resource}`);
  },

  getUser(userId) {
    return axios.getUser(`${resource}/${userId}`);
  },
};
