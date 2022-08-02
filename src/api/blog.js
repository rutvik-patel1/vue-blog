import axios from './index';

export function getBlogById(id) {
  return axios({
    url: `/blogs/${id}.json`,
    method: "get"
  })
}

export function getAllBlog() {
  return axios({
    url: `/blogs.json`,
    method: "get"
  })
}
