<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <task-list
      :listId="listId"
      :tasks="tasks">
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
    ...mapGetters(['getTasksFromList'])
  },

  created () {
    this.tasks = this.getTasksFromList(this.listId)
  },

  methods: {}
}
</script>

<style scoped>
  section {
    border: 1px solid #43A077;
    margin: 0.5rem;
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
