export default {
  user: {
    displayName: 'Carlos Azaustre',
    email: 'test@mail.com',
    photoURL: 'https://avatars0.githubusercontent.com/u/650752?v=4&s=64'
  },

  boards: {
    'a': { id: 'a', owner: '1', name: 'My Pet-Project' },
    'b': { id: 'b', owner: '2', name: 'Home Tasks' }
  },

  lists: {
    'aa': { id: 'aa', board: 'a', name: 'To Do' },
    'bb': { id: 'bb', board: 'b', name: 'To Buy' }
  },

  tasks: {
    'aa0': { id: 'aa0', list: 'aa', title: 'Learn Vue', completed: true },
    'aa1': { id: 'aa1', list: 'aa', title: 'Learn Vue-Router', completed: true },
    'aa2': { id: 'aa2', list: 'aa', title: 'Learn Vuex', completed: false },
    'aa3': { id: 'aa3', list: 'aa', title: 'Learn Nuxt', completed: false },
    'bb0': { id: 'bb0', list: 'bb', title: 'Milk', completed: false },
    'bb1': { id: 'bb1', list: 'bb', title: 'Walking with the dog', completed: true }
  }
}
