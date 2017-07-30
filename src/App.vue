<template>
  <div id="app">
    <header>
      <span>Vue Trello</span>
    </header>
    <input
      type="text"
      placeholder="✚ New Board"
      v-model="boardName"
      @keyup.enter="add()"
    />
    <template v-for="(board, index) in boards">
      <board
        :key="index"
        :id="board.id"
        :name="board.name">
      </board>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Board from '@/components/Board'

export default {
  name: 'app',
  components: { Board },

  data () {
    return {
      boardName: ''
    }
  },

  computed: {
    ...mapState(['boards'])
  },

  methods: {
    ...mapActions([
      'addBoard'
    ]),
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
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
    border: 2px solid #546E7A;
    background-color: #546E7A;
    padding: 0.5rem;
    font-size: 1.1rem;
    outline: 0;
    transition: all 600ms ease;
    width: 100%;
  }

  input:focus, input:active {
    background-color: white;
    color: #546E7A;
  }

  input::placeholder {
    color: white;
  }
</style>
