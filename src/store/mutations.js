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
  [types.ADD_TASK] (state, { listId, title }) {
    let list = state.lists.filter(list => list.id === listId)

    list.tasks.push({
      id: shortid.generate(),
      title,
      completed: false
    })
  },

  // Delete a task from a task list
  [types.DELETE_TASK] (state, { listId, taskId }) {
    let list = state.lists.filter(list => list.id === listId)

    list.tasks.filter(task => task.id !== taskId)
  },

  // Check a task as completed
  [types.MARK_AS_COMPLETED] (state, { listId, taskId }) {
    let list = state.lists.filter(list => list.id === listId)

    list.tasks.filter(task => {
      if (task.id === taskId) return !task.completed
    })
  }
}
