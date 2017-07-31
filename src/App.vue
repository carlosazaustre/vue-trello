<template>
  <div id="app">
    <app-header :user="user"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'app',
  components: { AppHeader, AppFooter },

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

  footer {
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;

    a {
      text-decoration: none;
      color: #546E7A;
    }
  }
</style>
