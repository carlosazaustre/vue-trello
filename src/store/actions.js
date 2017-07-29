import * as types from './mutation-types'

export default {
  addColumn ({ commit }, name) {
    commit(types.ADD_COLUMN, { name })
  },

  addTask ({ commit }, { listId, task }) {
    commit(types.ADD_TASK, { listId, task })
  },

  deleteTask ({ commit }, { listId, taskId }) {
    commit(types.DELETE_TASK, { listId, taskId })
  },

  markAsCompleted ({ commit }, { listId, taskId }) {
    commit(types.MARK_AS_COMPLETED, { listId, taskId })
  }
}
