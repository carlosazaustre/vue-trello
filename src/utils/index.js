export const getListById = (lists, listId) => {
  let atIndex = lists.findIndex(list => list.id === listId)
  return lists[atIndex]
}
