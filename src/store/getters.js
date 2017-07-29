export default {
  getTasksFromList: (state) => (listId) => {
    let list = state.lists.filter(list => list.id === listId)
    console.log('getters [getTasksFromList]: ', list)
    return list.tasks
  }
}
