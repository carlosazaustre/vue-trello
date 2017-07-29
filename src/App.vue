<template>
  <div id="app">
    <header>
      <span>Vue Trello</span>
    </header>
    <template v-for="(list, index) in lists">
      <column
        :key="index"
        :listId="list.id"
        :name="list.name"
        :tasks="list.tasks">
      </column>
    </template>
    <input
      type="text"
      placeholder="✚ New List"
      v-model="listName"
      @keyup.enter="addColumn(listName)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Column from '@/components/Column'

export default {
  name: 'app',
  components: { Column },

  data () {
    return {
      listName: ''
    }
  },

  computed: {
    ...mapState(['lists'])
  },

  methods: {
    ...mapActions(['addColumn'])
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
