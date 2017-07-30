import shortid from 'shortid'
import * as types from './mutation-types'

export default {
  addColumn ({ commit }, { board, name }) {
    let column = {
      id: shortid.generate(),
      name,
      board,
      tasks: []
    }
    commit(types.ADD_COLUMN, { column })
  },

  addTask ({ commit }, { listId, title }) {
    let task = {
      id: shortid.generate(),
      title,
      completed: false
    }
    commit(types.ADD_TASK, { listId, task })
  },

  deleteTask ({ commit }, { listId, taskId }) {
    commit(types.DELETE_TASK, { listId, taskId })
  },

  markAsCompleted ({ commit }, { listId, taskId }) {
    commit(types.MARK_AS_COMPLETED, { listId, taskId })
  }
}
