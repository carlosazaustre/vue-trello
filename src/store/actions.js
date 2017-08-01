import shortid from 'shortid'

import * as types from './mutation-types'
import { db } from '@/firebase'

export default {
  fetchBoards ({ commit, state }) {
    commit(types.FETCH_BOARDS_REQUEST)

    let boardsRef = db.ref('/boards')
    boardsRef.once('value', snapshot => {
      commit(types.FETCH_BOARDS_SUCCESS, { boards: snapshot.val() })
    })
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
