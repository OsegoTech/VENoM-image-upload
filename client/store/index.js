import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'

const store =  createStore({
  state,
  mutations,
  actions,
  // getters
})

export default store
