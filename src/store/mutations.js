import * as types from './mutation-types'

export default {
  // Create a new task list
  [types.ADD_COLUMN] (state, { column }) {
    state.lists.push(column)
  },

  // Add a new task to a task list
  [types.ADD_TASK] (state, { task }) {
    state.tasks.push(task)
  },

  // Delete a task from a task list
  [types.DELETE_TASK] (state, { taskId }) {
    let atIndex = state.tasks.findIndex(task => task.id === taskId)
    state.tasks.splice(atIndex, 1)
  },

  // Check a task as completed
  [types.MARK_AS_COMPLETED] (state, { taskId }) {
    state.tasks.map(task => {
      if (task.id === taskId) task.completed = !task.completed
    })
  }
}
