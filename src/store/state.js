export default {
  boards: [
    { id: 'a', name: 'My Pet-Project' },
    { id: 'b', name: 'Home Tasks' }
  ],
  lists: [
    {
      id: 'aa',
      board: 'a',
      name: 'To Do',
      tasks: [
        { id: 'aa0', title: 'Learn Vue', completed: true },
        { id: 'aa1', title: 'Learn Vue-Router', completed: true },
        { id: 'aa2', title: 'Learn Vuex', completed: false },
        { id: 'aa3', title: 'Learn Nuxt', completed: false }
      ]
    },
    {
      id: 'bb',
      board: 'b',
      name: 'To Buy',
      tasks: [
        { id: 'bb0', title: 'Milk', completed: false }
      ]
    }
  ]
}
