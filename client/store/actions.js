import axios from 'axios'

export const createPost = ({ commit }, post) => {
  return axios
    .post('https://localhost:3000/api/posts', post)
    .then(({ data }) => {
      commit('SET_POST', data)
    })
    .catch((error) => {
      console.log(error)
    })
}
