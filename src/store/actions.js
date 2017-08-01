import shortid from 'shortid'

import * as types from './mutation-types'
import { db } from '@/firebase'

export default {
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST)

    let boardsRef = db.ref('/boards').orderByChild('owner').equalTo(user)
    boardsRef.once('value')
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },

  fetchLists ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)

    let listsRef = db.ref('/lists').orderByChild('board').equalTo(board)
    listsRef.once('value')
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)

    let tasksRef = db.ref('/tasks').orderByChild('list').equalTo(list)
    tasksRef.once('value')
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  addBoard ({ commit }, { name }) {
    let board = {
      id: shortid.generate(),
      name
    }
    commit(types.ADD_BOARD, { board })
  },

  addColumn ({ commit }, { board, name }) {
    let column = {
      id: shortid.generate(),
      name,
      board
    }
    commit(types.ADD_COLUMN, { column })
  },

  addTask ({ commit }, { list, title }) {
    let task = {
      id: shortid.generate(),
      list,
      title,
      completed: false
    }
    commit(types.ADD_TASK, { task })
  },

  deleteTask ({ commit }, { taskId }) {
    commit(types.DELETE_TASK, { taskId })
  },

  markAsCompleted ({ commit }, { task }) {
    commit(types.MARK_AS_COMPLETED, { task })
  }
}
