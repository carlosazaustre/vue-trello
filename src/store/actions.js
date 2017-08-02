import * as types from './mutation-types'
import { db } from '@/firebase'

export default {
  // Fetch via AJAX the boards from user
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST)

    let boardsRef = db.ref('/boards').orderByChild('owner').equalTo(user)
    boardsRef.once('value')
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },

  // Fetch via AJAX the lists from a board
  fetchLists ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)

    let listsRef = db.ref('/lists').orderByChild('board').equalTo(board)
    listsRef.once('value')
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  // Fetch via AJAX the tasks from a list
  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)

    let tasksRef = db.ref('/tasks').orderByChild('list').equalTo(list)
    tasksRef.once('value')
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  // Add a new board via AJAX
  addBoard ({ commit }, { name }) {
    let boardsRef = db.ref('/boards')
    const id = boardsRef.push().key
    const board = { id, name }

    boardsRef.child(id)
      .set(board)
      .then(data => commit(types.ADD_BOARD, { board }))
  },

  // Add a new column/list to a board via AJAX
  addColumn ({ commit }, { board, name }) {
    let listsRef = db.ref('/lists')
    const id = listsRef.push().key
    const column = { id, name, board }

    listsRef.child(id)
      .set(column)
      .then(() => commit(types.ADD_COLUMN, { column }))
  },

  // Add a new tasks to a list/column via AJAX
  addTask ({ commit }, { list, title }) {
    let tasksRef = db.ref('/tasks')
    const id = tasksRef.push().key
    const task = { id, list, title, completed: false }

    tasksRef.child(id)
      .set(task)
      .then(() => commit(types.ADD_TASK, { task }))
  },

  // Delete a task from a list/AJAX via AJAX
  deleteTask ({ commit }, { taskId }) {
    let tasksRef = db.ref('/tasks').child(taskId)
    tasksRef.remove()
      .then(() => commit(types.DELETE_TASK, { taskId }))
  },

  // Mark as completed a task via AJAX
  markAsCompleted ({ commit }, { task }) {
    let tasksRef = db.ref('/tasks').child(task.id).child('completed')
    tasksRef.once('value')
      .then(snap => snap.val())
      .then(data => tasksRef.set(!data))
      .then(() => commit(types.MARK_AS_COMPLETED, { task }))
  }
}
