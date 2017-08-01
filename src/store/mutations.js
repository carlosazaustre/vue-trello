import Vue from 'vue'
import * as types from './mutation-types'

export default {
  // Fetch the boars through firebase
  [types.FETCH_BOARDS_REQUEST] (state) {
    console.log('Fetching data...')
  },

  [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
    state.boards = { ...boards }
  },

  // Create a new board
  [types.ADD_BOARD] (state, { board }) {
    Vue.set(state.boards, board.id, board)
  },

  // Create a new task list
  [types.ADD_COLUMN] (state, { column }) {
    Vue.set(state.lists, column.id, column)
  },

  // Add a new task to a task list
  [types.ADD_TASK] (state, { task }) {
    Vue.set(state.tasks, task.id, task)
  },

  // Delete a task from a task list
  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.values(state.tasks)
      .filter(task => task.id !== taskId)
  },

  // Check a task as completed
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed
  }
}
