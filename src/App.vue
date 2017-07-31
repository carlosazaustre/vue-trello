<template>
  <div id="app">
    <app-header :user="user"></app-header>
    <input
      type="text"
      placeholder="✚ New Board"
      v-model="boardName"
      @keyup.enter="add()"
    />
    <board
      v-for="(board, index) in boards"
      :key="index"
      :id="board.id"
      :name="board.name">
    </board>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import Board from '@/components/Board'

export default {
  name: 'app',
  components: { Board, AppHeader },

  data () {
    return {
      boardName: ''
    }
  },

  computed: {
    ...mapState([
      'user',
      'boards'
    ])
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
