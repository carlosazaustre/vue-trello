import shortid from 'shortid'

export default {
  // Create a new task list
  addColumn (state, { name }) {
    state.lists.push({
      id: shortid.generate(),
      name,
      tasks: []
    })
  },

  // Add a new task to a task list
  addTask (state, { listId, title }) {
    let list = state.lists.filter(list => list.id === listId)

    list.tasks.push({
      id: shortid.generate(),
      title,
      completed: false
    })
  },

  // Delete a task from a task list
  deleteTask (state, { listId, taskId }) {
    let list = state.lists.filter(list => list.id === listId)

    list.tasks.filter(task => task.id !== taskId)
  },

  // Check a task as completed
  markAsCompleted (state, { listId, taskId }) {
    let list = state.lists.filter(list => list.id === listId)

    list.tasks.filter(task => {
      if (task.id === taskId) return !task.completed
    })
  }
}
