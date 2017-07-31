<template>
  <div id="app">
    <header>
      <span>Vue Trello</span>
    </header>
    <!--<input
      type="text"
      placeholder="✚ New Board"
      v-model="boardName"
      @keyup.enter="add()"
    />-->
    <board
      v-for="(board, index) in boards"
      :key="index"
      :id="board.id"
      :name="board.name">
    </board>
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

<style lang="scss" scoped>
  #app {
    box-sizing: border-box;
    background-color: #b0bec5;
    color: #37474f;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  header {
    background-color: #607d8b;
    color: #90a4ae;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    padding: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;
    width: 100%;

    &:focus,
    &:active {
      background-color: white;
      color: #546E7A;
    }

    &::placeholder {
      color: white;
    }
  }
</style>
