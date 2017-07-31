<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <task-list
      :listId="listId"
      :tasks="tasksList">
    </task-list>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskList from '@/components/TaskList'

export default {
  name: 'column',
  components: {
    TaskList
  },

  props: {
    listId: String,
    name: String
  },

  computed: {
    ...mapGetters([
      'getTasksFromList'
    ]),
    tasksList () {
      return this.getTasksFromList(this.listId)
    }
  },

  methods: {}
}
</script>

<style scoped lang="scss">
  section {
    border: 1px solid #43A077;
    margin: 0.5rem;
    width: 100%;

    @media screen and (min-width: 600px) {
      width: calc(50% - 1rem - 2px);
    }
    @media screen and (min-width: 1024px) {
      width: calc(33% - 1rem - 2px);
    }
    @media screen and (min-width: 1200px) {
      width: calc(25% - 1rem - 2px);
    }
  }

  header {
    background-color: #43A077;
    margin: 0;
    padding: 0.5rem;
    color: white;
  }

  h3 {
    margin: 0;
  }
</style>
