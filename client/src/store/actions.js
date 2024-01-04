import axios from 'axios'

export const createPost = ({ commit }, post) => {
  return axios
    .post('http://localhost:3000/api/posts', post)
    .then(({ data }) => {
      commit('SET_POST', data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const fetchPosts = ({ commit }) => {
  return axios
    .get('http://localhost:3000/api/posts')
    .then(({ data }) => {
      commit('SET_POSTS', data)
    })
    .catch((error) => {
      console.log(error)
    })
}
