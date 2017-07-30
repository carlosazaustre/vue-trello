import * as types from './mutation-types'
import { getListById } from '@/utils'

export default {
  // Create a new task list
  [types.ADD_COLUMN] (state, { column }) {
    state.lists.push(column)
  },

  // Add a new task to a task list
  [types.ADD_TASK] (state, { listId, task }) {
    let list = getListById(state.lists, listId)
    list.tasks.push(task)
  },

  // Delete a task from a task list
  [types.DELETE_TASK] (state, { listId, taskId }) {
    let list = getListById(state.lists, listId)
    let atIndex = list.tasks.findIndex(task => task.id === taskId)
    list.tasks.splice(atIndex, 1)
  },

  // Check a task as completed
  [types.MARK_AS_COMPLETED] (state, { listId, taskId }) {
    let list = getListById(state.lists, listId)
    list.tasks.map(task => {
      if (task.id === taskId) task.completed = !task.completed
    })
  }
}
