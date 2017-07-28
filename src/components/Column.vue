<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <task-list :tasks="tasks" @addTask="addTask"></task-list>
  </section>
</template>

<script>
import TaskList from '@/components/TaskList'

export default {
  name: 'column',
  components: {
    TaskList
  },
  props: {
    name: String,
    tasks: Array
  },

  methods: {
    addTask (task) {
      this.tasks.push(task)
    }
  }
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
