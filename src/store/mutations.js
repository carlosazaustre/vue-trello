// import Vue from 'vue'
import shortid from 'shortid'
import * as types from './mutation-types'

const _getListById = (lists, listId) => {
  let atIndex = lists.findIndex(list => list.id === listId)
  return lists[atIndex]
}

export default {
  // Create a new task list
  [types.ADD_COLUMN] (state, { name }) {
    state.lists.push({
      id: shortid.generate(),
      name,
      tasks: []
    })
  },

  // Add a new task to a task list
  [types.ADD_TASK] (state, { listId, task }) {
    let list = _getListById(state.lists, listId)
    list.tasks.push({
      id: shortid.generate(),
      title: task,
      completed: false
    })
  },

  // Delete a task from a task list
  [types.DELETE_TASK] (state, { listId, taskId }) {
    let list = _getListById(state.lists, listId)
    list.tasks = list.tasks.filter(task => task.id !== taskId)
  },

  // Check a task as completed
  [types.MARK_AS_COMPLETED] (state, { listId, taskId }) {
    let list = _getListById(state.lists, listId)
    list.tasks.filter(task => {
      if (task.id === taskId) task.completed = !task.completed
    })
  }
}
