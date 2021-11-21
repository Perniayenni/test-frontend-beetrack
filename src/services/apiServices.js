import axios from "axios";

const BASEURL = "http://localhost:3000/api";

function createService(plural) {
  return {
    index(params) {
      return axios
        .get(`${BASEURL}/${plural}`, {
          params,
        })
        .then((response) => new Promise((resolve) => resolve(response.data)))
        .catch((error) => {
          return { error };
        });
    },
    create(params) {
      return axios
        .post(`${BASEURL}/${plural}`, {
          params,
        })
        .then((response) => new Promise((resolve) => resolve(response.data)))
        .catch((error) => {
          return { error };
        });
    },
    delete(id) {
      return axios
        .delete(`${BASEURL}/${plural}/${id}`)
        .then((response) => new Promise((resolve) => resolve(response.data)))
        .catch((error) => {
          return { error };
        });
    },
  };
}

const usersService = createService("users");

export { usersService };
