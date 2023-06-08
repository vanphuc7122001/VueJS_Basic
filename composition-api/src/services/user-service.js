import axios from "./customize-axios";

const resource = "/users";

export default {
  async get() {
    return await axios.get(`${resource}`);
  },

  async getUser(userId) {
    return await axios.get(`${resource}/${userId}`);
  },
};
