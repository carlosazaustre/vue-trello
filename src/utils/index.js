export const getListById = (lists, listId) => {
  let atIndex = lists.findIndex(list => list.id === listId)
  return lists[atIndex]
}

export const getListsByBoard = (lists, boardId) => {
  let boardLists = lists.filter(list => list.board === boardId)
  return boardLists
}
