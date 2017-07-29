// import Vue from 'vue'
import shortid from 'shortid'
import * as types from './mutation-types'

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
    let atIndex = state.lists.findIndex(list => list.id === listId)
    let list = state.lists[atIndex]

    list.tasks.push({
      id: shortid.generate(),
      title: task,
      completed: false
    })
  },

  // Delete a task from a task list
  [types.DELETE_TASK] (state, { listId, taskId }) {
    let atIndex = state.lists.findIndex(list => list.id === listId)
    let list = state.lists[atIndex]

    list.tasks = list.tasks.filter(task => task.id !== taskId)
  },

  // Check a task as completed
  [types.MARK_AS_COMPLETED] (state, { listId, taskId }) {
    let atIndex = state.lists.findIndex(list => list.id === listId)
    let list = state.lists[atIndex]

    list.tasks.filter(task => {
      if (task.id === taskId) task.completed = !task.completed
    })
  }
}
