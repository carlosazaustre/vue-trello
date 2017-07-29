import * as types from './mutation-types'

export default {
  addColumn ({ commit }, name) {
    commit(types.ADD_COLUMN, { name })
  },

  addTask ({ commit, state }, { listId, title }) {
    let atIndex = state.lists.findIndex(list => list.id === listId)
    let list = state.lists[atIndex]
    commit(types.ADD_TASK, { list, title })
  }

  // deleteTask ({ commit, state }, listId, taskId) {},

  // markAsCompleted ({ commit, state }, listId, taskId) {}
}
