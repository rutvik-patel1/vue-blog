import axios from './index';

export function getBlogById(id) {
  return axios({
    url: `/blogs/${id-1}.json`,
    method: "get"
  })
}

export function getAllBlog() {
  return axios({
    url: `/blogs.json`,
    method: "get"
  })
}

export function getAllComments(id) {
  return axios({
    url: `/blogs/${id}/comments.json`,
    method: "get",
  })
}

export function postComment(id,data) {
  return axios({
    url: `/blogs/${id}/comments.json`,
    method: "post",
    data
  })
}

