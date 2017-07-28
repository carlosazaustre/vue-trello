<template>
  <div id="app">
    <header>
      <span>Vue Trello</span>
    </header>
    <template v-for="list in lists">
      <column key="list.id" :name="list.name" :tasks="list.tasks"></column>
    </template>
    <input type="text" placeholder="✚ New List" v-model="listName" @keyup.enter="addColumn" />
  </div>
</template>

<script>
import shortid from 'shortid'
import Column from '@/components/Column'

export default {
  name: 'app',
  components: {
    Column
  },
  data () {
    return {
      lists: [
        {
          id: 0,
          name: 'To Do',
          tasks: [
            { id: 0, title: 'Learn Vue', completed: false },
            { id: 1, title: 'Learn Vue-Router', completed: true },
            { id: 2, title: 'Learn Vuex', completed: false },
            { id: 3, title: 'Learn Nuxt', completed: true }
          ]
        }
      ],
      listName: ''
    }
  },

  methods: {
    addColumn () {
      this.lists.push({
        id: shortid.generate(),
        name: this.listName,
        tasks: []
      })
      this.listName = ''
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0;
}

header {
  background-color: #546E7A;
  color: white;
  margin: 0;
  padding: 1rem;
}

input {
  background-color: #43A077;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem;
  color: white;
  border: 0;
  width: 80%;
  transition: all 600ms ease;
  outline: 0;
}

input:active, input:focus {
  background-color: white;
  color: #43A077;
  border-bottom: 2px solid #43A077;
}

input::placeholder {
  color: white;
}
</style>
