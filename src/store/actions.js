import * as types from './mutation-types'

export default {
  addColumn ({ commit }, name) {
    commit(types.ADD_COLUMN, { name })
  }

  // addTask ({ commit, state }, listId, title) {},

  // deleteTask ({ commit, state }, listId, taskId) {},

  // markAsCompleted ({ commit, state }, listId, taskId) {}
}
