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
      list: listId,
      title,
      completed: false
    }
    commit(types.ADD_TASK, { task })
  },

  deleteTask ({ commit }, { taskId }) {
    commit(types.DELETE_TASK, { taskId })
  },

  markAsCompleted ({ commit }, { taskId }) {
    commit(types.MARK_AS_COMPLETED, { taskId })
  }
}
