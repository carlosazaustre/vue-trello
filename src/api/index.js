import { db } from './firebase'

const boardsRef = db.ref('/boards')
const listsRef = db.ref('/lists')
const tasksRef = db.ref('/tasks')

export default {
  getBoardsByUser (userId) {
    const query = boardsRef.orderByChild('owner').equalTo(userId)
    return query.once('value')
  },

  postBoard (name) {
    const id = boardsRef.push().key
    const owner = 1
    const board = { id, name, owner }

    return boardsRef.child(id)
      .set(board)
      .then(() => board)
  },

  getListsFromBoard (boardId) {
    const query = listsRef.orderByChild('board').equalTo(boardId)
    return query.once('value')
  },

  postList (board, name) {
    const id = listsRef.push().key
    const column = { id, name, board }

    return listsRef.child(id)
      .set(column)
      .then(() => column)
  },

  getTasksFromList (listId) {
    const query = tasksRef.orderByChild('list').equalTo(listId)
    return query.once('value')
  },

  postTask (list, title) {
    const id = tasksRef.push().key
    const task = { id, list, title, completed: false }

    return tasksRef.child(id)
      .set(task)
      .then(() => task)
  },

  deleteTask (taskId) {
    return tasksRef.child(taskId).remove()
  },

  completedTask (taskId) {
    const query = tasksRef.child(taskId).child('completed')
    return query.once('value')
      .then(snap => snap.val())
      .then(data => query.set(!data))
  }
}
