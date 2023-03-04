const axios = require("axios");

const BaseAxiosClient = axios.create({
  baseURL: `https://api.bigcommerce.com/stores/${process.env.READ_STORE_HASH}/v3/`,
  headers: {
    "X-Auth-Token": `${process.env.READ_ACCESS_TOKEN}`,
  },
});

module.exports = BaseAxiosClient;
