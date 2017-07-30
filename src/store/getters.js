import { getListById } from '@/utils'

export default {
  getListById: (state) => (listId) => {
    return getListById(state.lists, listId)
  },

  getTasksFromList: (state, getters) => (listId) => {
    let list = getters.getListById(listId)
    return list.tasks
  }
}
