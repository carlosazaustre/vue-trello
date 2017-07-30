// import { getListById } from '@/utils'

export default {
  getListsByBoard: (state) => (boardId) => {
    return state.lists.filter(list => list.board === boardId)
  },

  getTasksFromList: (state) => (listId) => {
    return state.tasks.filter(task => task.list === listId)
  }
}
