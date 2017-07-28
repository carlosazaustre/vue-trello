<template>
  <ul>
    <li
      key="task.id"
      v-for="task in tasks"
      @click="markAsCompleted(task.id)"
      @dblclick="deleteTask(task.id)"
      :class="{ completed: task.completed }">
        {{ task.title }}
    </li>
    <input type="text" v-model="task" @keyup.enter="addTask" placeholder="New Task"/>
  </ul>
</template>

<script>
import shortid from 'shortid'

export default {
  name: 'task-list',
  props: {
    tasks: Array
  },

  data () {
    return {
      task: ''
    }
  },

  methods: {
    addTask () {
      this.$emit('addTask', {
        id: shortid.generate(),
        title: this.task,
        completed: false
      })
      this.task = ''
    },

    markAsCompleted (id) {
      this.tasks.filter(task => {
        if (task.id === id) {
          task.completed = !task.completed
          return task
        }
      })
    },

    deleteTask (id) {
      this.tasks.filter((task, index) => {
        if (task.id === id) {
          return this.tasks.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 1rem;
  }

  li.completed {
    background-color: #C8E6C9;
    color: #2E7D32;
  }

  li:not(:last-child) {
    border-bottom: 1px solid #43A077;
  }

  input {
    margin: 0.5rem;
    padding: 0.75rem;
    border: 1px solid #43A077;
    outline: 0;
    width: 90%;
    transition: background-color 600ms ease;
  }

  input:focus, input:active {
    background-color: #E8F5E9;
  }
</style>
