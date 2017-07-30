export default {
  boards: [
    { id: 'a', name: 'My Pet-Project' },
    { id: 'b', name: 'Home Tasks' }
  ],

  lists: [
    { id: 'aa', board: 'a', name: 'To Do' },
    { id: 'bb', board: 'b', name: 'To Buy' }
  ],

  tasks: [
    { id: 'aa0', list: 'aa', title: 'Learn Vue', completed: true },
    { id: 'aa1', list: 'aa', title: 'Learn Vue-Router', completed: true },
    { id: 'aa2', list: 'aa', title: 'Learn Vuex', completed: false },
    { id: 'aa3', list: 'aa', title: 'Learn Nuxt', completed: false },
    { id: 'bb0', list: 'bb', title: 'Milk', completed: false }
  ]
}
