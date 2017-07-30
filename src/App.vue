<template>
  <div id="app">
    <header>
      <span>Vue Trello</span>
    </header>
    <board></board>
  </div>
</template>

<script>
import Board from '@/components/Board'

export default {
  name: 'app',
  components: { Board }
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
</style>
