import axios from './index';

export function getBlogById(id) {
  return axios({
    url: "/" + id,
    method: "get"
  })
}

export function getAllBlog() {
  return axios({
    url: "/",
    method: "get"
  })
}
